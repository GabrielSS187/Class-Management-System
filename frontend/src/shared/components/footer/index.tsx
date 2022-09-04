import { FooterContainer } from "./styles";

import { GithubLogo, LinkedinLogo } from "phosphor-react";

export const Footer = () => {
  return (
    <FooterContainer>
      <strong>Feito por Gabriel Silva</strong>
      <a href="https://www.linkedin.com/in/gabriel-silva-souza-developer">
        <LinkedinLogo size={32} color="#2d68f0"/>
      </a>
      <a href="https://github.com/GabrielSS187/Class-Management-System">
        <GithubLogo size={32} color="#f04c4c" />
      </a>
    </FooterContainer>)
};