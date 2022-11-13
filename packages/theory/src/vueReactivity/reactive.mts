const product = {
  price: 5,
  quantity: 2,
};

let total = 0;

/**
 * Where we store the dependencies associated whith each reactive object's properties
 *
 * they keys are reactive objects
 */
const targetMap = new WeakMap<Record<PropertyKey, any>, DepsMap>();

type Dep = Set<() => void>;

/**
 * A map where we store the dependency object for each property.
 *
 * they keys are reactive object's property name and the value is a `dep`
 */
const depsMap = new Map<PropertyKey, Dep>();
type DepsMap = typeof depsMap;

const effect = () => {
  total = product.price * product.quantity;
};

const track = <T extends Record<PropertyKey, any>>(target: T, key: keyof T) => {
  let depsMap = targetMap.get(target);

  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map<keyof T, Dep>()));
  }

  /**
   * a `dep` is a dependency which is a set of effects that should get re-run
   * after when values change.
   */
  let dep = depsMap.get(key); // get the `dep` for this property

  if (!dep) {
    depsMap.set(key, (dep = new Set())); // not `dep` yet, create one
  }
  dep.add(effect);
};

const trigger = <T extends Record<PropertyKey, any>>(target: T, key: keyof T) => {
  let depsMap = targetMap.get(target);

  if (!depsMap) {
    return;
  }

  let dep = depsMap.get(key);

  if (dep) {
    dep.forEach((effect) => effect());
  }
};

export default function reactive<T extends Record<PropertyKey, any>>(obj: T) {
  return new Proxy(obj, {
    /**
     * A trap for getting a property value.
     * @param target The original object which is being proxied.
     * @param p The name or `Symbol` of the property to get.
     * @param receiver The proxy or an object that inherits from the proxy. Ensures the
     * proper value of `this` is used when the object has inherited values or functions
     * from another object
     */
    get(target, key, receiver) {
      const result = Reflect.get(target, key, receiver);

      track(target, key);

      return result;
    },

    set(target, key, value, receiver) {
      const oldValue = target[key];
      const result = Reflect.set(target, key, value, receiver);

      trigger(target, key);

      return result;
    },
  });
}
