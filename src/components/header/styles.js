import styled from "styled-components";

export const Container = styled.div`
  grid-area: "header";

  width: 100%;
  height: 105px;

  display: flex;
  justify-content: space-between;
  padding: 28px 123px;


  background-color: ${({theme}) => theme.COLORS.DARK_600};

`