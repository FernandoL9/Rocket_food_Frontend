import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: row;
  /* align-items: center; */
  /* justify-content: center; */

  margin-top: 32px;
  gap: 32px;

  background-color: {};

  h2, p {
      font-size: 16px;
      font-weight: 400;      
      color: ${({theme})=> theme.COLORS.WHITE_400};
  }

`