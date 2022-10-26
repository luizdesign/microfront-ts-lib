import { InitialStatusError, MimeTypeEnum, MinimalContentLength } from "../interfaces/request";
import { AxiosResponse } from 'axios';

const validateMimeType = (response: AxiosResponse): boolean =>
  response.headers['content-type'] === MimeTypeEnum.HTML;

const validateContentLength = (response: AxiosResponse): boolean =>
  parseInt(response.headers['content-length'], 10) >= MinimalContentLength;

const isAnError = (response: AxiosResponse): boolean =>
  response.status < InitialStatusError;

const validateRequest = (response: AxiosResponse) =>
  validateMimeType(response)
  && isAnError(response)
  && validateContentLength(response);

export {
  validateRequest,
};
