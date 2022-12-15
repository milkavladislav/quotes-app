import { useGetRandomQuoteQuery } from "../../services/qoutes";
import {
  NextButton,
  QuoteAuthor,
  QuoteBody,
  QuoteCard,
  Wrapper,
} from "./Quote.style";
import ReactLoading from "react-loading";

export interface IQuoteProps {
  categoryName: string;
}

export function Quote({ categoryName }: IQuoteProps) {
  const { data, isLoading, refetch, isFetching } =
    useGetRandomQuoteQuery(categoryName);

  return (
    <>
      <Wrapper>
        {isLoading || isFetching || !data ? (
          <ReactLoading
            type="spinningBubbles"
            color="#E6941A"
            height={200}
            width={200}
          />
        ) : (
          <QuoteCard>
            <QuoteBody>{data[0].quote}</QuoteBody>
            <QuoteAuthor>{data[0].author}</QuoteAuthor>
          </QuoteCard>
        )}
      </Wrapper>
      <NextButton onClick={refetch}>Next</NextButton>
    </>
  );
}
