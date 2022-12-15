import { InputBase, MenuItem } from "@mui/material";
import styled from "styled-components";
import { styled as MStyled } from "@mui/material/styles";

export const Wrapper = styled.div`
  display: grid;
  justify-self: end;
  grid-column: 2;
  @media (max-width: 500px) {
    justify-self: center;
  }
`;

export const CustomInput = styled(InputBase)`
  & .MuiInputBase-input {
    background-color: hsl(36deg 80% 50%);
    border-radius: 4px;
    width: 268px;
    height: 72px;
    border: none;
    font-family: "Lobster", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 2.5rem;
    text-transform: lowercase;
    color: #ffffff;
    text-align: center;
    padding: 17px 0 0 0;
    @media (max-width: 500px) {
      padding: 0;
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`;

export const CustomMenuItem = MStyled(MenuItem)`
    font-family: "Lobster", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    @media (max-width: 500px) {
      min-height: 0;
    }
`;
