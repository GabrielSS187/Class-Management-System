import { createContext, useState, ChangeEvent } from "react";
import { useForm } from "../hooks/useForm";

import { api } from "../services/api";

import { 
  IOutputStudents,
  IOutputClass,
  IOutputClassAndStudents
 } from "../requestsDTOs/IRequestsTypes";

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

  const [ classList, setClassList ] =
   useState<IOutputClass[] | []>([]);

  const [ foundClass, setFoundClass ] =
  useState<IOutputClassAndStudents | undefined>(undefined);

  const [ studentsList, setStudentsList ] = 
  useState<IOutputStudents[] | []>([]);

  const [ nameClass, setNameClass ] = useState<string>("");

  //* ==========================================================
  const getNameClass = (e: ChangeEvent<HTMLSelectElement>) => {
    setNameClass(e.target.value);
  };

  const formClass = useForm({
    nameClass: "",
    responsible: ""
  });

  async function getAllClass () {
    try {
      const result = await api.get("/class/all");
      setClassList(result?.data);
      setNameClass(result?.data[0].name_class);
    } catch (error: any) {
      console.log(error?.message);
    };
  };

  async function findClass (nameClass: string) {
    try {
      const { data } = await api.get(`/class/${nameClass}`);
      setFoundClass(data);
      setStudentsList(data.studentsList);
      return data.studentsList;
    } catch (error: any) {
      console.log(error?.message);
    };
  };

  async function addClass (e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await api.post("/class/create", formClass.form);
      formClass.clearInputs();
      setIsActiveModalForm(false);
      await getAllClass();
    } catch (error: any) {
      console.log(error?.message);
    };
  };

  async function deleteClass ( nameClass: string ) {
    try {
      await api.delete(`/class/${nameClass}`);
      await getAllClass();
    } catch (error: any) {
      console.log(error?.message);
    } finally {
      setIsActiveModalForm(false);
    };
  };

//* Students =======================================================
  const formStudents = useForm({
    firstName: "",
    lastName: "",
    participation: ""
  });

  async function addStudents (
      e: ChangeEvent<HTMLFormElement>, 
      nameClass: string
    ) {
    e.preventDefault();
    try {
      const [, {data} ] = await Promise.all([
          await api.post(`/students/${nameClass}`, {
            ...formStudents.form,
            participation: Number(formStudents.form.participation)
          }), 
          api.get(`/class/${nameClass}`)
      ]);
      formStudents.clearInputs();
      setStudentsList(data.studentsList);
    } catch (error: any) {
      console.log(error?.message);
    };
  };

  function editStudent ( idStudent: string ) {
    //* Aguardando código
  };

async function deleteStudent ( nameClass: string, idStudent: string ) {
    try {
      await api.delete(`/students/${nameClass}/${idStudent}`);
    } catch (error: any) {
      console.log(error?.message);
    }
  };
//* ===================================================================
  
  const store: CreateContextType = {
    isActiveModalForm,
    setIsActiveModalForm,
    //*=====================
    studentsList, 
    addStudents,
    formStudents,
    //*======================
    classList,
    addClass,
    formClass,
    getAllClass,
    getNameClass,
    findClass,
    foundClass,
    nameClass,
    deleteClass
  };
    
    return (
        <ContextGlobal.Provider value={store}>
            { children }
        </ContextGlobal.Provider>
    );
};
