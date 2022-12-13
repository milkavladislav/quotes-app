import styled from "styled-components";

export const Wrapper = styled.div`
  grid-column: 2;
`;

export const QuoteCard = styled.div`
  padding: min(20px, 3%);
  background-color: hsl(36deg 90% 70%);
`;

export const QuoteBody = styled.h1`
  font-family: "Lobster", cursive;
  margin: 0;
  font-weight: 400;
  font-size: 4rem;
  @media(max-width: 500px) {
    font-size: 2rem;
  }
`;
export const QuoteAuthor = styled.p`
  font-family: "Lobster", cursive;
  margin: 0;
  font-weight: 400;
  font-size: 3.5rem;
  text-align: right;
  @media(max-width: 500px) {
    font-size: 1.7rem;
  }
`;

export const NextButton = styled.button`
  grid-column: 2;
  cursor: pointer;
  background-color: hsl(36deg 80% 50%);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  width: 268px;
  height: 72px;
  border: none;
  font-family: "Lobster", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  letter-spacing: 0.46px;
  text-transform: uppercase;
  color: #ffffff;
  &:hover {
    zoom: 1.01;
    background-color: hsl(36deg 90% 50%);
  }
`;
