import queryString from 'query-string';
import env from '@/lib/env';
import { OMDB_API_BASE_URL, API_VERSION } from './omdb.constants';

import type {
  GetMovieQuery,
  GetMovieResponse,
  GetMoviesQuery,
  GetMoviesResponse,
} from './omdb.type';

export const fetchWithApiKey = async <T>(query: T, options?: RequestInit) => {
  const queryStringified = queryString.stringify({
    v: API_VERSION,
    apikey: env.VITE_OMDB_API_KEY,
    ...query,
  });

  const response = await fetch(`${OMDB_API_BASE_URL}?${queryStringified}`, options);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getMoviesSearch = async ({ s, ...query }: GetMoviesQuery) => {
  const response = await fetchWithApiKey({ s: s.trim(), ...query });
  return response as GetMoviesResponse;
};

export const getMovieById = async (id: string, query: GetMovieQuery) => {
  const response = await fetchWithApiKey({ i: id, ...query });
  return response as GetMovieResponse;
};

export const getMovieByTitle = async (title: string, query: GetMovieQuery) => {
  const response = await fetchWithApiKey({ t: title, ...query });
  return response as GetMovieResponse;
};
