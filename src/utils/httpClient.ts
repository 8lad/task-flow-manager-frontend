import axios, { AxiosInstance, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';

const axiosConfig: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
};

const httpInstance: AxiosInstance = axios.create(axiosConfig);

class HttpClient {
  private httpClient: AxiosInstance;
  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  get<ResponseData>(url: string, config?: AxiosRequestConfig): Promise<ResponseData> {
    return httpClient.get(url, config);
  }

  post<ResponseData, RequestBody>(
    url: string,
    body: RequestBody,
    config?: AxiosRequestConfig,
  ): Promise<ResponseData> {
    return httpClient.post(url, body, config);
  }

  put<ResponseData, RequestBody>(
    url: string,
    body: RequestBody,
    config?: AxiosRequestConfig,
  ): Promise<ResponseData> {
    return httpClient.put(url, body, config);
  }

  patch<ResponseData, RequestBody>(
    url: string,
    body: RequestBody,
    config?: AxiosRequestConfig,
  ): Promise<ResponseData> {
    return httpClient.patch(url, body, config);
  }

  delete<ResponseData>(url: string, config?: AxiosRequestConfig): Promise<ResponseData> {
    return httpClient.delete(url, config);
  }
}

export const httpClient = new HttpClient(httpInstance);
