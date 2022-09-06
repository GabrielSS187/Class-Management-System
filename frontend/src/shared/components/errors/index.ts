import styled from "styled-components";

export const ContainerErrors = styled.div`
  padding-top: 5px;
  > p {
    font-size: clamp(.900rem, 2vw, 1.5rem);
    text-align: center;
    color: red;
  }
`;

export const ErrorsParagraph = styled.p`
  color: red;
`;