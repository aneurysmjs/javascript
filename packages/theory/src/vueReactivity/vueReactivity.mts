const price = 5;
let quantity = 2;
let total = 0;

// const depsMap = new Map();

const dep = new Set<() => void>();

const effect = () => {
  total = price * quantity;
};

const track = () => {
  dep.add(effect);
};

const trigger = () => {
  dep.forEach((effect) => effect());
};

track();
trigger();

quantity = 3;

console.log('total = ', total);
trigger();
console.log('total = ', total);


export default function reactive() {
  return {};
}
