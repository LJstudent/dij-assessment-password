import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IClient } from '../model/interfaces/IClient'

export const clientApi = createApi({
  reducerPath: 'clientApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pastebin.com' }),
  endpoints: (builder) => ({
    getClients: builder.query<IClient[], string>({
      query: () => '/raw/zSFTiVWr',
    }),
  }),
});

export const { useGetClientsQuery } = clientApi;