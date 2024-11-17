import axios, { AxiosRequestConfig } from 'axios';
import { ErrorResponse } from 'react-router-dom';

export const BASE_API_URL = 'https://pokeapi.co/api/v2';

export default async function callAPI({ url, method }: AxiosRequestConfig) {
  try {
    const response = await axios({ url, method });

    return response.data;
  } catch (e) {
    const error = e as ErrorResponse;

    const response = {
      message: error.data.message,
      error: true,
    };
    return response;
  }
}
