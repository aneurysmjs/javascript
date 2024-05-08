import { memo } from 'react';

const SlowItem = ({ text }: { text: string }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className="list-group-item">Text: {text}</li>;
};

const SlowList = memo(({ text }: { text: string }) => {
  const items = [];

  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }

  return <ul className="list-group">{items}</ul>;
});

export default SlowList;
