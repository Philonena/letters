import { api } from './api';
import { GetLetterType, SendLetterType } from 'types/types';

export const letterApi = api.injectEndpoints({
  endpoints: (build) => ({
    getLetter: build.mutation<GetLetterType, SendLetterType>({
      query: (data) => ({
        url: `/email/check`,
        method: 'POST',
        body: JSON.stringify(data),
      }),
    }),
    getHealth: build.query<string, string>({
      query: () => ({
        url: `/health`,
        method: 'GET',
      }),
    }),
  }),
});
