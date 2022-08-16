import { Container, FormContainer, ButtonsContainer } from "./styles";

import { Trash } from "phosphor-react";

export const EditStudentForm = () => {
  return (
    <Container>
      <h1>Edit or delete the student</h1>
      <FormContainer>
        <section>
          <div>
            <label htmlFor="First-name">First name</label>
            <input type="text" required placeholder="First name" id="First-name" />
          </div>
          <div>
            <label htmlFor="Last-name">Last name</label>
            <input type="text" required placeholder="Last name" id="Last-name" />
          </div>
          <div>
            <label htmlFor="Participation">Participation</label>
            <input type="text" required placeholder="Participation" id="Participation" />
          </div>
        </section>
        <ButtonsContainer>
          <div>
            <button type="submit">Save</button>
          </div>
          <div>
            <button type="button"><Trash size={18} /></button>
          </div>
        </ButtonsContainer>
      </FormContainer>
    </Container>
  );
};