import { useContext } from "react";
import { ContextGlobal } from "../../../contexts/contextGlobal";

import { ContainerErrors, ErrorsParagraph } from "../../errors";

import { Container, FormContainer } from "./styles";

export const AddClassForm = () => {
  const { formClass, addClass, errors } = useContext(ContextGlobal);

  return (
    <Container>
      <h1>Add a new class</h1>
      { errors.formClass &&
        <ContainerErrors>
          <p>{errors.formClass}</p>
        </ContainerErrors>
      }
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
          {formClass.form.responsible.trim().length < 2 &&
            <ErrorsParagraph>Required field</ErrorsParagraph>
          }
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
          {formClass.form.nameClass.trim().length < 2 &&
            <ErrorsParagraph>Required field</ErrorsParagraph>
          }
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </FormContainer>
    </Container>
  );
};