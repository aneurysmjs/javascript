import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DelayedMessage from './DelayMessage';

jest.useFakeTimers();

describe('DelayedMessage', () => {
  afterEach(jest.useRealTimers);

  it('displays a message after specified ms', () => {
    render(<DelayedMessage message="papi" />);

    jest.advanceTimersByTime(500);

    expect(screen.queryByText('papi')).not.toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.queryByText('papi')).toBeInTheDocument();
  });
});
