import styled from "styled-components";

export const Container = styled.footer `
  grid-area: "header";

  display: flex;
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
  padding: 24px 123px;
  gap: 8px;

  position: absolute;
  width: 1366px;
  height: 77px;
  left: 0.54px;
  top: 895px;

  background: ${({theme}) => theme.COLORS.DARK_600};

  img {
    margin-left: 16px;
  }

`