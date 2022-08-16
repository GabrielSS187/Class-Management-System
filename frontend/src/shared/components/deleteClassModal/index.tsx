import { Container } from "./styles";

interface DeleteClassModalProps {
  nameClass: string;
}

export const DeleteClassModal = ({nameClass}: DeleteClassModalProps) => {
  return (
    <Container>
      <h1>Are you sure you want to delete this class</h1>
      <h2>{nameClass}</h2>
      <br />
      <button>Yes</button>
    </Container>
  );
};