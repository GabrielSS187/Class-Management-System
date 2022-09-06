import { useContext } from "react";
import { ContextGlobal } from "../../../shared/contexts/contextGlobal";

import { Container } from "./styles";

interface DeleteClassModalProps {
  nameClass: string;
};

export const DeleteClassModal = ({nameClass}: DeleteClassModalProps) => {
  const {
    deleteClass
  } = useContext(ContextGlobal);

  return (
    <Container>
      <h1>Are you sure you want to delete this class</h1>
      <h2>{nameClass}</h2>
      <br />
      <button onClick={() => deleteClass(nameClass)}>
        Yes
      </button>
    </Container>
  );
};