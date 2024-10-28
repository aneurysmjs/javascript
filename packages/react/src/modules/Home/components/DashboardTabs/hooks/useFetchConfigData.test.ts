import axios, { type AxiosError } from 'axios';
import { describe, expect, it, jest } from '@jest/globals';
import { renderHook, waitFor, act } from '@testing-library/react';

import useFetchConfigData, { API_URL } from './useFetchConfigData';

// jest.mock('axios');

jest.mock('axios', () => {
  const originalModule = jest.requireActual<typeof axios>('axios');

  return {
    ...originalModule,
    default: originalModule,
    get: jest.fn(),
  };
});

const mockAxios = axios as jest.Mocked<typeof axios>;

const mockData = [
  {
    id: 0,
    body: 'lorem ipsum',
  },
  {
    id: 1,
    body: 'dolor it samet',
  },
];

describe('useFetchConfigData', () => {
  it('displays proper states while fetching is resolving', async () => {
    mockAxios.get.mockResolvedValue({ data: mockData, status: 200 });

    const controller = new AbortController();

    const { result } = renderHook(() => useFetchConfigData());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toStrictEqual([]);
    expect(result.current.error).toBeNull();
    expect(mockAxios.get).toHaveBeenCalledWith(API_URL, { signal: controller.signal });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.data).toStrictEqual(mockData);
      expect(result.current.error).toBeNull();
    });
  });

  it('displays proper failure when fetching is rejected', async () => {
    const error = new Error('some bad happened');

    mockAxios.get.mockRejectedValue(error);

    const controller = new AbortController();
    const { result } = renderHook(() => useFetchConfigData());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toStrictEqual([]);
    expect(result.current.error).toBeNull();
    expect(mockAxios.get).toHaveBeenCalledWith(API_URL, { signal: controller.signal });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toEqual(error);
    });
  });

  it('should handle request cancellation correctly without updating the error state', async () => {
    const abortError = new Error('Request canceled') as AxiosError;
    abortError.code = 'ERR_CANCELED';
    abortError.message = 'canceled';
    abortError.name = 'CanceledError';
    /**
     * `isCancel`
     *
     * @see https://github.com/axios/axios/blob/v1.x/lib/cancel/isCancel.js#L4C28-L4C38
     */
    // @ts-ignore
    abortError.__CANCEL__ = true;

    // Mock axios to simulate request cancellation
    mockAxios.get.mockImplementation(() => Promise.reject(abortError));

    const { result, unmount } = renderHook(() => useFetchConfigData());

    // Wait for the hook to start fetching data
    await waitFor(() => {});

    // Unmount the component to trigger the cleanup and abort the request
    act(() => {
      unmount();
    });

    await waitFor(() => {
      // Verify that the error state is still null after cancellation
      expect(result.current.error).toBe(null);
      expect(result.current.data).toEqual([]);
    });
  });
});
