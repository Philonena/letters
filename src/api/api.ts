import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../constants/constants';

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
});

export const api = createApi({
  reducerPath: 'furletter',
  tagTypes: [
    'letterApi',
  ],
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
