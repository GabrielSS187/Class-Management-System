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
  OptionsButtonsContainer
} from "./styles";

export const Home = () => {
  const { isActiveModalForm, setIsActiveModalForm } = 
  useContext(ContextGlobal);

  const [ selectedModalForm, setSelectedModalForm ] = 
  useState<string>("");

  const acitveModalStudentsForm = () => {
    setIsActiveModalForm(true);
    setSelectedModalForm("edit-student");
  };

  const acitveModalAddClass = () => {
    setIsActiveModalForm(true);
    setSelectedModalForm("add-class");
  };

  const acitveModalDeleteClass = () => {
    setIsActiveModalForm(true);
    setSelectedModalForm("delete-class");
  };

  const switchModals = () => {
    switch (selectedModalForm) {
      case "edit-student": return <EditStudentForm />;
      case "add-class": return <AddClassForm />;
      case "delete-class": return <DeleteClassModal nameClass="Labenu" />;
      default: return null;
    };
  };

  return (
    <Main isActiveModalForm={isActiveModalForm} >
      <Header />
      <SubHeader>
        <OptionsButtonsContainer>
          <button 
            onClick={acitveModalAddClass} 
            title="Adicionar uma nova classe">
            <Plus size={32} />
          </button>
          <SelectedClass />
        </OptionsButtonsContainer>
        <h1>DATA</h1>
        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, debitis.</h4>
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
            <div className="info-class">
              <p>Class: <strong>Labenu</strong></p>
              <button 
                onClick={acitveModalDeleteClass}
                title="Excluir turma"
              ><Trash size={17} /></button>
              <p>Responsible: <strong>Tesla</strong></p>
            </div>
            <Table 
              acitveModalStudentsForm={acitveModalStudentsForm} 
            />
          </div>
          <div className="graphic">
            <Graphic />
          </div>
        </Informations>
      </Align>
    </Main>
  );
};