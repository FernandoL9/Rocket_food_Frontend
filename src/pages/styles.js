import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  margin: 0px auto;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content"
  "fooster";
`


export const Info = styled.div`
  /* position: relative; */
  display: flex;
  gap: 32px;

  label {
    margin-top: 16px ;
    display: flex;

    > div {
      display: flex;
      /* flex-direction: row; */
      justify-content: center;
      align-items: center;
      padding: 0 auto; 
      gap: 8px;

      position: relative;
      cursor: pointer;



      width: 229px;
      height: 48px;

      background-color: ${({theme})=> theme.COLORS.DARK_800};

      > img {
        width: 24px;
        height: 24px;
      }
      
      > p {
        color: ${({theme})=> theme.COLORS.WHITE_100};
      }

      border-radius: 8px;

    }
    
    input {
      display: flex;
      width: 229px;
      height: 48px;

      opacity: 0;
      
      position: absolute;
      cursor: pointer;
    }
  }

  .name {
    input {
      margin-top: 16px;
      display: flex;
      padding: 12px 14px;

      font-size: 16px;

      width: 463px;
      height: 48px;

      background-color: ${({theme})=> theme.COLORS.DARK_800} ;
      color: ${({theme})=> theme.COLORS.WHITE_500};
      border: none;
      border-radius: 8px;
      outline: 0;
    }
  }

  .category {

    input {
      display: flex;
      width: 364px;
      height: 48px;

      background: transparent;
      color: ${({theme})=> theme.COLORS.WHITE_400};
      font-weight: 400;


      border: none;
    }

    .Input {
      margin-top: 16px;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 16px;

      width: 364px;
      height: 48px;

      background-color: ${({theme})=> theme.COLORS.DARK_800} ;
      border-radius: 5px;
      border: none;
    }
  }
`

export const Ingredient = styled.div`  
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  padding: 4px 8px;

  width: 837px;
  height: 48px;

  background: #0D161B;
  background-color: ${({theme})=> theme.COLORS.DARK_800} ;
  border-radius: 8px;
`
export const Price = styled.div`
  display: flex;
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
  padding: 12px 14px;

  width: 251px;
  height: 48px;

  background-color: ${({theme})=> theme.COLORS.DARK_800} ;
  color: ${({theme})=> theme.COLORS.WHITE_500};
  border-radius: 8px;
`

export const Describe = styled.div`
 width: 1120px;
 height: 172px;

  textarea {
    display: flex;
    margin-top: 16px;
    flex-direction: column;
    align-items: center;
    padding: 14px 14px;

    font-size: 16px;
    resize: none;
  
    background-color: ${({theme})=> theme.COLORS.DARK_800} ;
    color: ${({theme})=> theme.COLORS.WHITE_500};
    border-radius: 8px;

    padding: 14px;
    gap: 14px;

    width: 100%;
    height: 100%;

    border-radius: 8px;
    border: none;
    outline: none;
  }
`

export const Button = styled.button `
  margin-top: 72px;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  padding: 12px 24px;

  width: 172px;
  height: 48px;

  background-color: ${({theme})=> theme.COLORS.TOMATO_400} ;
  color: ${({theme})=> theme.COLORS.WHITE_100};
  border-radius: 5px;
  border: none;
`


