import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIKEY, QUOTEAPIPATH } from "../utils/consts";

interface IQuote {
  quote: string;
  author: string;
  category: string;
}

export const quoteApi = createApi({
  reducerPath: "quoteApi",
  baseQuery: fetchBaseQuery({
    baseUrl: QUOTEAPIPATH,
    headers: {
      "X-Api-Key": APIKEY,
    },
  }),
  endpoints: (builder) => ({
    getRandomQuote: builder.query<IQuote[], void>({
      query: () => "",
    }),
  }),
});

export const { useGetRandomQuoteQuery } = quoteApi;
