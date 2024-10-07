import { type FunctionComponent, useState, useEffect } from 'react';

const BaseEffects: FunctionComponent = () => {
  console.log('render');
  const [items, setItems] = useState<{ id: number; price: number }[]>([]);
  // const [total, setTotal] = useState(0);
  const total = items.reduce((accum, { price }) => accum + price, 0);

  // useEffect(() => {
  //   setTotal(items.reduce((accum, { price }) => accum + price, 0));
  // }, [items]);

  const addItem = () => {
    setItems((prev) => {
      return [...prev, { id: prev.length + 1, price: 3.0 }];
    });
  };

  return (
    <div className="text-theme">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();

          // addItem();
        }}
      >
        <button type="submit" onClick={addItem}>
          add items
        </button>
        {/* {JSON.stringify(items, null, 2)} */}
        <div>Total: {total}</div>
      </form>
    </div>
  );
};

export default BaseEffects;
