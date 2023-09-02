import { styled } from "styled-components";
import { StyleVariables } from "./GlobalStyles";

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-size: 15px;
  text-align: center;
  background-color: ${StyleVariables.backgroundColor};
`;
export const HeaderTitle = styled.h1`
  font-size: 30px;
  color : white;
`;

export const Padding = styled.div`
  padding-bottom: 60px;
`;