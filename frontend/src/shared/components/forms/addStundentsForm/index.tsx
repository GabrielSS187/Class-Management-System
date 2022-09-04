import { ChangeEvent, useContext } from "react";
import { ContextGlobal } from "../../../contexts/contextGlobal";

import { Animated } from "react-animated-css";

import { ContainerErrors } from "../../errors";

import { Form , Button, Input, Container } from "./styles";

export const AddStudentsForm = () => {
  const { addStudents, formStudents, nameClass, errors } 
  = useContext(ContextGlobal);

  return (
    <Container>
        <Animated animationIn="slideInDown" animationOut="slideOutDown" isVisible={true}>
            {
              errors.formStudent &&
              (
                <ContainerErrors>
                  <p>{errors.formStudent}</p>
                </ContainerErrors>
              )
            }
            
            <Form 
            onSubmit={(e: ChangeEvent<HTMLFormElement>) => 
            addStudents(e, nameClass)}
          >

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
              <Input type="number" placeholder="Participation" 
                name="participation"
                value={formStudents.form?.participation}
                onChange={formStudents.onChange}
                required
              />
              <Button type="submit">SEND</Button>
          </Form>
        </Animated>
    </Container>
  );
};