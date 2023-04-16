import styled from "styled-components";

export const LiStyled = styled.li`
  display: flex;
  width: 90%;
  margin: 20px auto;
  padding: 15px 3px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow-wrap: anywhere;
  justify-content: space-between;

  .curto {
    width: 16px;
    height: 16px;
    background: var(--toastify-color-progress-error);
    border-radius: 100%;
    margin-right: 10px;
  }

  .medio {
    width: 16px;
    height: 16px;
    background: orange;
    border-radius: 100%;
    margin-right: 10px;
  }

  .longo {
    width: 16px;
    height: 16px;
    background: var(--toastify-color-success);
    border-radius: 100%;
    margin-right: 10px;
  }
  
  div{
    display: flex;
    align-items: center;
  }

  img{
    width: 25px;
    height: 24px;
  }

  .icon-check{
    width: 36px;
    height: 36px;
  }
`;
