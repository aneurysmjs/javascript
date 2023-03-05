import type { RootState } from '@/store';

export interface Action<P> {
  type: string;
  payload: P;
}

export interface ApiMetaType {
  types?: [`${string}REQUEST`, `${string}SUCCESS`, `${string}FAILURE`];
  callAPI?: () => Promise<unknown>;
  shouldCallAPI?: (S: RootState) => boolean;
}

export interface AsyncState {
  isLoading: boolean;
  error: boolean | null;
}
