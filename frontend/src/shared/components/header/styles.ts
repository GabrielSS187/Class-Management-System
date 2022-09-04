import styled from "styled-components";

interface Props {
  errors: string;
};

export const HeaderContainer = styled.header<Props>`
  height: ${(({errors}: Props) => errors ? "23vh" : "18vh")};
  width: 100%;
  background-color: #00bfff;
  font-weight: 300;

  @media (max-width: 550px) {
    height: ${(({errors}: Props) => errors ? "40vh" : "30vh")};;
  }
`;