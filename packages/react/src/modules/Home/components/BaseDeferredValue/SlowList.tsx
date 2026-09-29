import { memo } from 'react';

/* eslint-disable react/purity -- intentionally slow render for the useDeferredValue demo */
const SlowItem = ({ text }: { text: string }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className="border-b border-gray-200 bg-white px-4 py-2 text-gray-900 last:border-b-0">Text: {text}</li>;
};

const SlowList = memo(({ text }: { text: string }) => {
  const items = [];

  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }

  return <ul className="flex flex-col rounded-md border border-gray-200">{items}</ul>;
});

export default SlowList;
