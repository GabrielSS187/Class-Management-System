import { ChangeEvent, ReactNode } from "react";

export type ContextGlobalProps = {
  children: ReactNode;
};

export type FormStudentsType = {
  firstName: string,
  lastName: string,
  participation: number
};

export type FormClassType = {
  name: string,
  responsible: string
};

export type CreateContextType = {
  isActiveModalForm: boolean;
  setIsActiveModalForm: ( input: boolean ) => void;

  studentsList: FormStudentsType[];
  addStudents: (e: ChangeEvent<HTMLFormElement>) => void;
  formStudents: {
    form: FormStudentsType, 
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLInputElement>) => void, 
    clearInputs: () => void;
  }; 

  classList: FormClassType[];
  addClass: (e: ChangeEvent<HTMLFormElement>) => void;
  formClass: {
    form: FormClassType, 
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLInputElement>) => void, 
    clearInputs: () => void;
  }; 
};