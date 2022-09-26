import { useContext } from "react";
import { ContextGlobal } from "../../contexts/contextGlobal";

import { Table } from "../../../shared/components/table";

import { Trash } from "phosphor-react";
import { Graphic } from "../graphic";

import { Load } from "../load";

import { Container, Info, EmptyContainer } from "./styles";

interface InformationsProps {
  activeModalDeleteClass: () => void;
  activeModalStudentsForm: (isStudent: string) => void;
};

export const Informations = ({
  activeModalStudentsForm,
  activeModalDeleteClass
}: InformationsProps) => {
  const { 
    foundClass,
    nameClass,
    studentsList,
    isLoad,
   } = useContext(ContextGlobal);

   if ( isLoad ) {
    return <Load />
   };

  return (
    <Container>
            <Info>
                <div className="table">
                    {
                      foundClass ?
                      (
                        <div className="info-class">
                          <p>Class: <strong>{nameClass}</strong></p>
                          <button 
                            onClick={activeModalDeleteClass}
                            title="Excluir turma"
                          ><Trash size={17} /></button>
                          <p>Responsible: <strong>{foundClass?.responsible}</strong></p>
                        </div>
                      )
                      :
                      (
                        null
                      )
                    }
                
                    {
                      studentsList.length ?
                      (
                        <Table 
                          activeModalStudentsForm={activeModalStudentsForm} 
                        />
                      )
                      :
                      (
                        <EmptyContainer>
                          {foundClass && <p><strong>Create a student for this class!.</strong></p>}
                        </EmptyContainer>
                      )
                    }
                </div>

                {
                    studentsList.length ? 
                    (
                      <div className="graphic">
                        <Graphic />
                      </div>
                    )
                    : 
                    (<EmptyContainer/>)
                }
            </Info>
        </Container>
  )
};