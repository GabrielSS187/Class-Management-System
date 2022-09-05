import { AxiosResponse } from "axios";
import { ChangeEvent, ReactNode } from "react";

import { 
  IOutputStudents,
  IOutputClass,
  IOutputClassAndStudents
 } from "../requestsDTOs/IRequestsTypes";

export type ContextGlobalProps = {
  children: ReactNode;
};

export type FormStudentsType = {
  firstName: string,
  lastName: string,
  participation: number
};

export type FormClassType = {
  nameClass: string,
  responsible: string
};

export type CreateContextType = {
  isActiveModalForm: boolean;
  setIsActiveModalForm: ( input: boolean ) => void;

  //* ==========================================================

  studentsList: IOutputStudents[];

  addStudents: (e: ChangeEvent<HTMLFormElement>, nameClass: string) => void;
  searchStudent: (idStudent: string) => void;
  editStudent: (e: ChangeEvent<HTMLFormElement>, nameClass: string, idStudent: string) 
  => Promise<void>;
  deleteStudent: (nameClass: string, idStudent: string) => Promise<void>;

  foundStudent: IOutputStudents | undefined;
  formStudents: {
    form: FormStudentsType, 
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLInputElement>) => void, 
    clearInputs: () => void;
  }; 
  formEditStudent: {
    form: FormStudentsType, 
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLInputElement>) => void, 
    clearInputs: () => void;
  };

  //* ==========================================================

  classList: IOutputClass[];

  getAllClass: () => Promise<void>;
  getNameClass: (e: ChangeEvent<HTMLSelectElement>) => void;
  findClass: (nameClass: string) => Promise<void>;
  deleteClass: (nameClass: string) => Promise<void>;
  addClass: (e: ChangeEvent<HTMLFormElement>) => void;
  
  foundClass: IOutputClassAndStudents | undefined;
  nameClass: string;
  formClass: {
    form: FormClassType, 
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLInputElement>) => void, 
    clearInputs: () => void;
  }; 
  //* ======================================================
  errors: {
    formStudent: string,
    formEditStudent: string,
    formClass: string,
  };
};