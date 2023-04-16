import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 12px 0px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  img {
    width: 294px;
    height: 71px;
  }

  form{
    display: flex;
    width: max-content;
    padding: 4px;
    font-size: 16px;
    border-width: 1px;
    border-color: #cccccc;
    background-color: #ffffff;
    color: #000000;
    border-style: solid;
    border-radius: var(--radius-8);
    box-shadow: 5px 5px 5px rgba(55, 41, 41, 0.1);
    margin: 0 auto;
  
    div{
      display: flex;
      align-content: center;
    }
  }

  input {
    border: none;
  }
  input:focus {
    outline: none;
  }

  .icon-search{
    width: 34px;
    height: 33px;
  }

  @media(min-width: 700px){
    img{
      display: flex;
      margin-left: 30px;
    }
  }
`;
