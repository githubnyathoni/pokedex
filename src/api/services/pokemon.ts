import callAPI, { BASE_API_URL } from '..';

export const GET_ALL_POKEMON = async (nextUrl = null) => {
  let url;

  if (nextUrl) {
    url = nextUrl;
  } else {
    const ENDPOINT = 'pokemon';
    url = `${BASE_API_URL}/${ENDPOINT}`;
  }

  return callAPI({ url, method: 'GET' });
};

export const GET_POKEMON = async (url: string) => {
  return callAPI({ url, method: 'GET' });
};
