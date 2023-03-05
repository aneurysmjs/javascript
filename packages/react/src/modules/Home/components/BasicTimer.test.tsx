import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BasicTimer from './BasicTimer';

jest.useFakeTimers();

describe('BasicTimer', () => {
  afterEach(jest.useRealTimers);

  it('increments counter each second', () => {
    render(<BasicTimer />);

    expect(screen.queryByTestId('counter')).toHaveTextContent('0');

    jest.advanceTimersByTime(500);

    expect(screen.queryByTestId('counter')).toHaveTextContent('0');

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.queryByTestId('counter')).toHaveTextContent('1');

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.queryByTestId('counter')).toHaveTextContent('2');
  });
});
