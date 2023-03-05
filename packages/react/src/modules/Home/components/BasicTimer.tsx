import { FunctionComponent, useEffect, useState } from 'react';

const BasicTimer: FunctionComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // eslint-disable-next-line no-return-assign, no-param-reassign
      setCount((c) => (c += 1));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  return <div data-testid="counter">{count}</div>;
};

export default BasicTimer;
