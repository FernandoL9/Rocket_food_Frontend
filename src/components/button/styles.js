import styled from "styled-components";

export const Container = styled.button`

  width: 100%;
  height: 56px;

  border-radius: 10px;
  border: none;
  
  font-weight: 500;

  background-color: ${({theme}) => theme.COLORS.TOMATO_100};
  color: ${({theme}) => theme.COLORS.WHITE_100};

  &:disabled{
    opacity: 0.5;
  }
`