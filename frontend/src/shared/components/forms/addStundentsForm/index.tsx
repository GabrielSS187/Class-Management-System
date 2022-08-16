import { useContext } from "react";
import { ContextGlobal } from "../../../contexts/contextGlobal";

import { Form , Button, Input } from "./styles";

export const AddStudentsForm = () => {
  const { addStudents, formStudents } = useContext(ContextGlobal);

  return (
    <Form onSubmit={addStudents}>
        <Input type="text" placeholder="First name"
          name="firstName"
          value={formStudents.form?.firstName}
          onChange={formStudents.onChange}
          required
        />
        <Input type="text" placeholder="Last name"
          name="lastName"
          value={formStudents.form?.lastName}
          onChange={formStudents.onChange}
          required
        />
        <Input type="text" placeholder="Participation" 
          name="participation"
          value={formStudents.form?.participation}
          onChange={formStudents.onChange}
          required
        />
        <Button type="submit">SEND</Button>
      </Form>
  );
};