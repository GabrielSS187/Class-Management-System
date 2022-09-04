import { useContext } from "react";
import { ContextGlobal } from "../../contexts/contextGlobal";

import { AddStudentsForm } from "../forms/addStundentsForm";

import { HeaderContainer } from "./styles";

export const Header = () => {
  const { errors }  = useContext(ContextGlobal);

  return (
    <HeaderContainer errors={errors.formStudent}>
      <AddStudentsForm />
    </HeaderContainer>
  );
};