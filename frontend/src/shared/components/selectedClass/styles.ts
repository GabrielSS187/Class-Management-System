import styled from "styled-components";

export const ContainerMessageError = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: none;
  }

  @media (max-width: 480px) {
    > span {
      display: none;
    }

    > div {
      display: block;
      font-size: 20px;
    }
  }
`;