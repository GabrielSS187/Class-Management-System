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

  studentsList: IOutputStudents[];
  addStudents: (e: ChangeEvent<HTMLFormElement>, nameClass: string) => void;
  formStudents: {
    form: FormStudentsType, 
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLInputElement>) => void, 
    clearInputs: () => void;
  }; 
  getAllClass: () => Promise<void>;
  getNameClass: (e: ChangeEvent<HTMLSelectElement>) => void;
  findClass: (nameClass: string) => Promise<void>;
  foundClass: IOutputClassAndStudents | undefined;
  nameClass: string;
  deleteClass: (nameClass: string) => Promise<void>;

  //* ==================================================

  classList: IOutputClass[];
  addClass: (e: ChangeEvent<HTMLFormElement>) => void;
  formClass: {
    form: FormClassType, 
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLInputElement>) => void, 
    clearInputs: () => void;
  }; 
};