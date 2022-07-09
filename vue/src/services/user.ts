import fetch from "@/utils/fetch";

export type LoginParams = {
  username: string | undefined;
  password: string | undefined;
};

type ApiOperationsResponse<T> = {
  code: number;
  result: "success" | "error";
  message: string;
  data: T;
};

export const loginApi = (data: LoginParams) => {
  return fetch<ApiOperationsResponse<{ token: string }>>(
    "http://127.0.0.1:7001",
    "/api/user/login",
    {
      method: "post",
      body: JSON.stringify(data),
    }
  );
};
