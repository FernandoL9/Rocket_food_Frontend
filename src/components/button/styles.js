import styled from "styled-components";

export const Container = styled.button`

  width: 100%;
  height: 56px;

  padding: 0 16px;
  margin-top: 16px;
  border: 0;
  border-radius: 10px;
  font-weight: 500;

  &disabled{
    opacity: 0.5;
  }

  background-color: ${({theme}) => theme.COLORS.TOMATO_100};
  color: ${({theme}) => theme.COLORS.WHITE_100};


`;