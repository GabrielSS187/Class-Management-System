import { useContext } from "react";
import { ContextGlobal } from "../../../contexts/contextGlobal";

import { Container, FormContainer } from "./styles";

export const AddClassForm = () => {
  const { formClass, addClass } = useContext(ContextGlobal);

  return (
    <Container>
      <h1>Add a new class</h1>
      <FormContainer onSubmit={addClass}>
        <div>
          <label htmlFor="responsible">Responsible</label>
          <input type="text" 
            name="responsible"
            value={formClass.form.responsible}
            onChange={formClass.onChange}
            placeholder="Responsible" id="responsible" 
            required 
          />
        </div>
        <div>
          <label htmlFor="class">class name</label>
          <input type="text" 
            name="nameClass"
            value={formClass.form.nameClass}
            onChange={formClass.onChange}
            placeholder="class name" id="class" 
            required
          />
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </FormContainer>
    </Container>
  );
};