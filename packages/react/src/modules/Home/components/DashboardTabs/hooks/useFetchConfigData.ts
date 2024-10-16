import { useEffect, useReducer } from 'react';

import axios from 'axios';
import { Data } from '../types';

interface State {
  data: Data[];
  isLoading: boolean;
  error: Error | null;
}

type Action =
  | { type: 'FETCH_INIT' }
  | { type: 'FETCH_SUCCESS'; payload: Data[] }
  | { type: 'FETCH_FAILURE'; error: Error };

const url = 'https://jsonplaceholder.typicode.com/comments';

const dataFetchReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      };
    case 'FETCH_FAILURE':
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

    if (!state.data.length) {
      // Only fetch if data is empty
      dispatch({ type: 'FETCH_INIT' });

      axios
        .get<Data[]>(url, { signal: controller.signal })
        .then((response) => {
          if (isMounted) {
            dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
          }
        })
        .catch((err) => {
          if (isMounted && err.name !== 'AbortError') {
            dispatch({ type: 'FETCH_FAILURE', error: err });
          }
        });
    }

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [state.data]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
  };
}
