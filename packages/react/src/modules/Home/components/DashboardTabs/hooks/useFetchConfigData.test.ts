import axios from 'axios';
import { describe, expect, it, jest } from '@jest/globals';
import { renderHook, waitFor, act } from '@testing-library/react';

import useFetchConfigData, { API_URL } from './useFetchConfigData';

jest.mock('axios');

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
    mockAxios.get.mockResolvedValue({ data: mockData });

    const controller = new AbortController();

    const { result } = renderHook(() => useFetchConfigData());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toStrictEqual([]);
    expect(result.current.error).toBeNull();
    expect(mockAxios.get).toHaveBeenCalledWith(API_URL, { signal: controller.signal });

    await waitFor(() => {});

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toStrictEqual(mockData);
    expect(result.current.error).toBeNull();
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
});
