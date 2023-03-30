import styled from "styled-components";

export const Container = styled.div`
  grid-area: "header";

  width: 100%;
  height: 105px;

  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 28px 123px;

  background-color: ${({theme}) => theme.COLORS.DARK_600};
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  >img {
    max-width: 197px;
    max-height: 30px;
  }

  span {
    width: 34px;
    height: 20px;
    padding-right: 50px;
    align-self: flex-end;

    font-size: 12px;
    color: ${({theme}) => theme.COLORS.CAKE_200};
  }
`

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 144px;
  margin: 0 32px 0 32px;
  gap: 14px;

  width: 581px;
  height: 48px;

  border: none;
  border-radius: 5px;

  background-color: ${({theme}) => theme.COLORS.DARK_900};
  color: ${({theme}) => theme.COLORS.WHITE_600};

  >input {
    width: 100%;
    height: 100%;

    padding: 2px;

    background: transparent;
    border: none;
    outline: 0;

    color: ${({theme}) => theme.COLORS.WHITE_600};

  }

`

export const Button = styled.button`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  gap: 8px;
  /* margin-left: 32px; */

  width: 216px;
  height: 56px;

  border: none;
  border-radius: 5px;

  background-color: ${({theme}) => theme.COLORS.TOMATO_100};
  color: ${({theme}) => theme.COLORS.WHITE_100};
`
export const Logout = styled.button`
  background: none;
  border: none;
  margin-left: 32px;
  /* padding: 32px; */

`