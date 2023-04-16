import styled from "styled-components";

export const DivStyled = styled.div`
  max-width: 650px;
  width: 90%;
  margin: 35px auto;
  padding: 10px;
  border-radius: var(--radius-10);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  h1 {
    display: flex;
    font-size: 26px;
    color: var(--color-primary);
    text-shadow: -2px 1px 0px var(--gray-5);
    padding: 2px 0px
  }
`;
