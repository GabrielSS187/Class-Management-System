import { ChangeEvent, useContext } from "react";

import { ContextGlobal } from "../../../contexts/contextGlobal";

import { Container, FormContainer, ButtonsContainer } from "./styles";

import { Trash } from "phosphor-react";
import { ContainerErrors } from "../../errors";

export const EditStudentForm = () => {
  const { 
    foundStudent, 
    formEditStudent, 
    editStudent, 
    nameClass, 
    deleteStudent,
    errors,
   } = useContext(ContextGlobal);

  return (
    <Container>
      <h1>Edit or delete the student</h1>
      { errors &&
        <ContainerErrors>
          <p>{errors.formEditStudent}</p>
        </ContainerErrors>
      }
      <FormContainer onSubmit={
           (e: ChangeEvent<HTMLFormElement>) => 
           editStudent(e, nameClass, foundStudent?.id_student!)
          }
        >
        <section>
          <div>
            <label htmlFor="First-name">First name</label>
            <input type="text" 
                id="First-name"
                name="firstName"
                value={formEditStudent.form.firstName}
                onChange={formEditStudent.onChange}
                placeholder={foundStudent?.first_name} 
             />
          </div>
          <div>
            <label htmlFor="Last-name">Last name</label>
            <input type="text"
                id="Last-name"
                name="lastName"
                value={formEditStudent.form.lastName}
                onChange={formEditStudent.onChange}
                placeholder={foundStudent?.last_name}
             />
          </div>
          <div>
            <label htmlFor="Participation">Participation</label>
            <input type="number" 
                name="participation"
                value={formEditStudent.form.participation}
                onChange={formEditStudent.onChange}
                id="Participation" 
                placeholder={foundStudent?.participation}
            />
          </div>
        </section>
        <ButtonsContainer>
          <div>
            <button type="submit">Save</button>
          </div>
          <div>
            <button type="button"
              onClick={() => 
                deleteStudent(nameClass, foundStudent?.id_student!)
              }
            >
              <Trash size={18} />
            </button>
          </div>
        </ButtonsContainer>
      </FormContainer>
    </Container>
  );
};