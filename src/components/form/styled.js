import styled from "styled-components";

export const DivStyled = styled.div`
  max-width: 650px;
  width: 90%;
  margin: 35px auto;
  padding: 10px;
  border-radius: var(--radius-10);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    display: flex;
    font-size: 26px;
    color: var(--color-primary);
    text-shadow: -2px 1px 0px var(--gray-5);
  }

  input {
    display: flex;
    font-size: 16px;
    font-weight: bold;
    border-width: 1px;
    border-color: #cccccc;
    background-color: #ffffff;
    color: #000000;
    border-style: solid;
    border-radius: var(--radius-8);
    box-shadow: 5px 5px 5px rgba(55, 41, 41, 0.1);
    margin: 0 auto;
    box-shadow: rgb(55 41 41 / 10%) 5px 5px 5px;
    padding: 10px 3px;
    margin: 10px auto;
    width: 80%;

    div {
      display: flex;
      align-content: center;
    }
  }

  select {
    display: flex;
    font-size: 16px;
    border-width: 1px;
    border-color: #cccccc;
    background-color: #ffffff;
    color: #000000;
    border-style: solid;
    border-radius: var(--radius-8);
    box-shadow: 5px 5px 5px rgba(55, 41, 41, 0.1);
    margin: 0 auto;
    box-shadow: rgb(55 41 41 / 10%) 5px 5px 5px;
    padding: 10px 3px;
    margin: 10px auto;
    width: 80%;
    font-weight: bold;
  }

  button {
    width: 80%;
    margin: 10px auto;
  }

  input:focus {
    outline: none;
  }

  button {
    box-shadow: 0px 1px 0px 0px #fff6af;
    background: linear-gradient(
      to bottom,
      #ffec64 5%,
      var(--color-primary) 100%
    );
    background-color: #ffec64;
    border-radius: 6px;
    border: 1px solid #ffaa22;
    display: inline-block;
    cursor: pointer;
    color: #333333;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 12px 27px;
    text-decoration: none;
    text-shadow: -2px 1px 0px var(--gray-1);
  }
  button:hover {
    background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
    background-color: #ffab23;
  }
  button:active {
    position: relative;
    top: 1px;
  }
`;
