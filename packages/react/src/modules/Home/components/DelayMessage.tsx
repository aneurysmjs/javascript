import { FunctionComponent, useEffect, useState } from 'react';

interface Props {
  message: string;
  delay?: number;
}

const DelayedMessage: FunctionComponent<Props> = ({ message }) => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 1000);
  }, []);

  return <div>{display ? <span>{message}</span> : null}</div>;
};

export default DelayedMessage;
