import styled from "styled-components";

interface Props {
  errors: string;
};

export const HeaderContainer = styled.header<Props>`
  height: ${(({errors}: Props) => errors ? "25vh" : "20vh")};
  padding-top: ${(({errors}: Props) => errors ? "20px" : "normal")};
  padding-bottom: ${(({errors}: Props) => errors ? "20px" : "normal")};
  width: 100%;
  background-color: #00bfff;
  font-weight: 300;

  @media (max-width: 550px) {
    height: ${(({errors}: Props) => errors ? "50vh" : "35vh")};;
  }
`;