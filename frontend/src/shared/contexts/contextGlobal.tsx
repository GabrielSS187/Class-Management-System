import { createContext, useState, ChangeEvent } from "react";
import { useForm } from "../hooks/useForm";

//* Types
import { 
  FormStudentsType, 
  FormClassType, 
  ContextGlobalProps, 
  CreateContextType 
} from "./typesContextGlobal";

export const ContextGlobal = 
createContext<CreateContextType>({} as CreateContextType);

export const ContextGlobalComponent = ({ children }: ContextGlobalProps) => {
  const [ isActiveModalForm, setIsActiveModalForm ] = 
  useState<boolean>(false);

  const [ classList, setClassList ] = useState<FormClassType[]>([]);

  const [ studentsList, setStudentsList ] = useState<FormStudentsType[]>([
    {firstName: "Gabriel", lastName: "Silva", participation: 50},
    {firstName: "Lany", lastName: "Santos", participation: 50}
  ]);

  const formClass = useForm({
    name: "",
    responsible: ""
  });

  const formStudents = useForm({
    firstName: "",
    lastName: "",
    participation: 20
  });

  const addClass = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setClassList([...classList, formClass.form]);
    setIsActiveModalForm(false);
  };

  const deleteClass = ( id: string ) => {
    //* Aguardando código
  };

//* Students =======================================================
  const addStudents = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStudentsList([...studentsList, formStudents.form]);
  };


  const editStudent = ( id: string ) => {
    //* Aguardando código
  };

  const deleteStudent = ( id: string ) => {
    //* Aguardando código
  };
//* ===================================================================
  
  const store: CreateContextType = {
    isActiveModalForm,
    setIsActiveModalForm,
    studentsList, 
    addStudents,
    formStudents,
    classList,
    addClass,
    formClass
  };
    
    return (
        <ContextGlobal.Provider value={store}>
            { children }
        </ContextGlobal.Provider>
    );
};
