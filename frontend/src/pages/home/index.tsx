import { useState } from "react";
import { useContext } from "react";
import { ContextGlobal } from "../../shared/contexts/contextGlobal";

import { Header } from "../../shared/components/header";
import { Table } from "../../shared/components/table";
import { Graphic } from "../../shared/components/graphic";
import { PopupModal } from "../../shared/components/popupModal";
import { AddClassForm } from "../../shared/components/forms/addClassForm";
import { EditStudentForm } from "../../shared/components/forms/editStudentsForm";
import { SelectedClass } from "../../shared/components/selectedClass";
import { DeleteClassModal } from "../../shared/components/deleteClassModal";

import { Plus, Trash } from "phosphor-react";

import { 
  Main,
  SubHeader, 
  Informations, 
  Align, 
  OptionsButtonsContainer,
  EmptyContainer,
} from "./styles";
import { Footer } from "../../shared/components/footer";

export const Home = () => {
  const { 
    isActiveModalForm, 
    setIsActiveModalForm, 
    nameClass,
    foundClass,
    searchStudent,
    studentsList,
  } = useContext(ContextGlobal);

  const [ selectedModalForm, setSelectedModalForm ] = 
  useState<string>("");

  const activeModalStudentsForm = (idStudent: string) => {
    setIsActiveModalForm(true);
    setSelectedModalForm("edit-student");
    searchStudent(idStudent);
  };

  const activeModalAddClass = () => {
    setIsActiveModalForm(true);
    setSelectedModalForm("add-class");
  };

  const activeModalDeleteClass = () => {
    setIsActiveModalForm(true);
    setSelectedModalForm("delete-class");
  };

  const switchModals = () => {
    switch (selectedModalForm) {
      case "edit-student": return <EditStudentForm />;
      case "add-class": return <AddClassForm />;
      case "delete-class": return <DeleteClassModal 
        nameClass={nameClass}
       />;
      default: return null;
    };
  };

  return (
    <Main isActiveModalForm={isActiveModalForm} >
        <Header />
        <SubHeader>
            <OptionsButtonsContainer>
              <button 
                onClick={activeModalAddClass} 
                title="Adicionar uma nova classe">
                <Plus size={32} />
              </button>
              <SelectedClass />
            </OptionsButtonsContainer>
            <h1>DATA</h1>
            <h4>
              { foundClass ? 
                  (<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, debitis.</p>)
                :
                (
                    <>
                      <p>"You don't have any classes yet!. Create one to get started."</p>
                      <br />
                      <Footer />
                    </>
                  )
              }
            </h4>
        </SubHeader>

        {/* Modal Forms */}
        { isActiveModalForm && 
          <PopupModal setActiveModalForm={setIsActiveModalForm}>
            { 
              switchModals()
            }
          </PopupModal>
        }

        <Align>
            <Informations>
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
            </Informations>
        </Align>
        { foundClass && <Footer /> }
    </Main>
  );
};