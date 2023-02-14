import { render, fireEvent } from '@testing-library/react';
import { jest, describe, it } from '@jest/globals';

import DebouncedInput from './DebouncedInput';

const handler = jest.fn();

jest.useFakeTimers();

describe('DebounceInput', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  it('should call handler with value after debounce time', async () => {
    const { getByTestId } = render(<DebouncedInput debounceHandler={handler} />);
    const input = getByTestId('input-search') as HTMLInputElement;

    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: 'n' } });
    fireEvent.change(input, { target: { value: 'ne' } });
    fireEvent.change(input, { target: { value: 'new' } });

    expect(input.value).toBe('new');
    expect(handler).not.toHaveBeenCalled();

    // Move on the timer
    jest.advanceTimersByTime(250);

    fireEvent.change(input, { target: { value: 'new ' } });
    fireEvent.change(input, { target: { value: 'new v' } });
    fireEvent.change(input, { target: { value: 'new va' } });
    fireEvent.change(input, { target: { value: 'new val' } });
    fireEvent.change(input, { target: { value: 'new valu' } });
    fireEvent.change(input, { target: { value: 'new value' } });

    expect(handler).not.toHaveBeenCalled();

    jest.runAllTimers();
    // await new Promise((resolve) => setTimeout(resolve, 500));
    expect(input.value).toBe('new value');
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith('new value');
  });
});
