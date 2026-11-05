export interface AsyncState<T> {
  readonly status: 'idle' | 'loading' | 'success' | 'error';
  readonly data?: T;
  readonly message?: string;
}
