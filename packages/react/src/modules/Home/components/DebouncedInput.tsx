import type { ChangeEvent } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import debounce from 'lodash.debounce';

interface Props {
  debounceHandler?: (value: string) => void;
  wait?: number;
}

const DebouncedInput = ({ debounceHandler, wait = 5000 }: Props) => {
  const handleChange = debounce((evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target as HTMLInputElement;

    if (debounceHandler) {
      debounceHandler(value);
    }
  }, wait);

  return <input data-testid="input-search" onChange={handleChange} />;
};

export default DebouncedInput;
