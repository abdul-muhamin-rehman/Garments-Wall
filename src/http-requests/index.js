import { axiosInstance } from "./interceptor";

export const post = (url, body, headers = {}) => {
  return axiosInstance({
    url,
    headers,
    method: "POST",
    data: body,
  });
};

export const get = (url, params = {}) => {
  return axiosInstance({
    url,
    method: "GET",
    params,
  });
};

export const remove = (url) => {
  return axiosInstance({
    url,
    method: "DELETE",
  });
};

export const put = (url, body) => {
  return axiosInstance({
    url,
    method: "PUT",
    data: body,
  });
};
