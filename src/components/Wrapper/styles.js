import styled from "styled-components";

export const Container = styled.div`


  width: 100%;
  height: auto;

  padding: 40px 125px 116px 123px;

  color: white;

  >a {
    color: ${({theme}) => theme.COLORS.WHITE_300};

    text-decoration: none;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 24px;
  }

  >h1 {

    color: ${({theme}) => theme.COLORS.WHITE_300};

    font-family: 'Poppins';
    font-weight: 500;
    font-size: 32px;
  }

`