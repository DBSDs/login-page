export type CommonResponse<T> = {
  code: number;
  result: string;
  message: string;
  data: T;
};
