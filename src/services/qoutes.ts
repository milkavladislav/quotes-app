import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIKEY, QUOTEAPIPATH, RANDOMQUOTE } from "../utils/consts";

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
    getRandomQuote: builder.query<IQuote[], string>({
      query: (category) =>
        category !== RANDOMQUOTE ? `?category=${category}` : "",
    }),
  }),
});

export const { useGetRandomQuoteQuery } = quoteApi;
