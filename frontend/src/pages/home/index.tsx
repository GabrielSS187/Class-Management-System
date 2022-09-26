import { useState } from "react";
import { useContext } from "react";
import { ContextGlobal } from "../../shared/contexts/contextGlobal";

import { Header } from "../../shared/components/header";
import { Informations } from "../../shared/components/informations";
import { PopupModal } from "../../shared/components/popupModal";
import { AddClassForm } from "../../shared/components/forms/addClassForm";
import { EditStudentForm } from "../../shared/components/forms/editStudentsForm";
import { SelectedClass } from "../../shared/components/selectedClass";
import { DeleteClassModal } from "../../shared/components/deleteClassModal";

import { BirthdayAnimation } from "../../shared/components/birthdayAnimation";

import { Plus } from "phosphor-react";

import { 
  Main,
  SubHeader, 
  OptionsButtonsContainer,
} from "./styles";
import { Footer } from "../../shared/components/footer";

export const Home = () => {
  const { 
    isActiveModalForm, 
    setIsActiveModalForm, 
    nameClass,
    foundClass,
    searchStudent,
    loadSelect,
    activeAnimation
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
        { activeAnimation && <BirthdayAnimation /> }
        <Header />
        <SubHeader>
            <OptionsButtonsContainer>
                  { !loadSelect && 
                      (<button 
                        onClick={activeModalAddClass} 
                        title="Adicionar uma nova classe">
                        <Plus size={32} />
                      </button>
                      )
                  }
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

        <Informations 
          activeModalStudentsForm={activeModalStudentsForm}
          activeModalDeleteClass={activeModalDeleteClass}
        />

        { foundClass && <Footer /> }
    </Main>
  );
};