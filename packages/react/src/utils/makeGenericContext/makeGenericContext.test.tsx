/* eslint-disable no-console */
import { renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';
import makeGenericContext from './makeGenericContext';

describe('makeGenericContext', () => {
  /**
   * console.error makes to much noise, that's why we just suppress it.
   *
   * @see https://github.com/testing-library/react-hooks-testing-library/issues/564
   */
  beforeEach(() => {
    jest.spyOn(console, 'error');

    (console.error as jest.Mock).mockImplementation(() => {}); // eslint-disable-line @typescript-eslint/no-empty-function
  });

  afterEach(() => {
    (console.error as jest.Mock).mockRestore();
  });

  it('useGenericContext throws an error when context is not defined', () => {
    const [useGenericContext] = makeGenericContext('TestContext');

    expect(() => renderHook(() => useGenericContext())).toThrow(
      'TestContext must be used within a Provider',
    );
  });

  it('useGenericContext returns context when defined', () => {
    const [useContext, Provider] = makeGenericContext<{ name: string }>('TestContext');

    const wrapper = ({ children }: { children: ReactNode }) => (
      <Provider value={{ name: 'test' }}>{children}</Provider>
    );

    const { result } = renderHook(() => useContext(), { wrapper });

    expect(result.current).toEqual({ name: 'test' });
  });
});
