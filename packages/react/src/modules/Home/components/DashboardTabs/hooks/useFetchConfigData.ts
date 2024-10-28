import { useEffect, useReducer } from 'react';

import axios, { type AxiosError } from 'axios';
import { Data } from '../types';

interface State {
  data: Data[];
  isLoading: boolean;
  error: Error | null;
}

const FETCH_INIT = 'FETCH_INIT';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

type Action =
  | { type: typeof FETCH_INIT }
  | { type: typeof FETCH_SUCCESS; payload: Data[] }
  | { type: typeof FETCH_FAILURE; error: Error };

export const API_URL = 'https://jsonplaceholder.typicode.com/comments';

const dataFetchReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      throw new Error();
  }
};

export default function useFetchConfigData() {
  const initialState: State = {
    data: [],
    isLoading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(dataFetchReducer, initialState);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    // Only fetch if data is empty
    dispatch({ type: FETCH_INIT });

    (async () => {
      try {
        const response = await axios.get<Data[]>(API_URL, { signal: controller.signal });

        // if (isMounted) {
        //   dispatch({ type: FETCH_SUCCESS, payload: response.data });
        // }
        if (isMounted && response.status === 200) {
          dispatch({ type: FETCH_SUCCESS, payload: response.data });
        } else {
          console.error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error: unknown) {
        // if (isMounted && (error as AxiosError).name !== 'AbortError') {
        //   dispatch({ type: FETCH_FAILURE, error: error as AxiosError });
        // }

        if (!axios.isCancel(error)) {
          dispatch({ type: FETCH_FAILURE, error: error as AxiosError });
        }
      }
    })();

    // axios
    //   .get<Data[]>(API_URL, { signal: controller.signal })
    //   .then((response) => {
    //     if (isMounted) {
    //       dispatch({ type: FETCH_SUCCESS, payload: response.data });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log('err', err);

    //     if (isMounted && err.name !== 'AbortError') {
    //       dispatch({ type: FETCH_FAILURE, error: err });
    //     }
    //   });

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
  };
}
