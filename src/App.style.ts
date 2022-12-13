import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  margin: min(100px, 10%) 0px;
  gap: 50px;
  justify-content: center;
  justify-items: center;
  grid-template-columns:
    1fr
    min(150ch, 100%)
    1fr;
`;
