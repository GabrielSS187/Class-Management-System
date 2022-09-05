import { createContext, useState, ChangeEvent, useEffect } from "react";
import { useForm } from "../hooks/useForm";

import { api } from "../services/api";

import { 
  IOutputStudents,
  IOutputClass,
  IOutputClassAndStudents
 } from "../requestsDTOs/IRequestsTypes";

//* Types
import { 
  ContextGlobalProps, 
  CreateContextType 
} from "./typesContextGlobal";

export const ContextGlobal = 
createContext<CreateContextType>({} as CreateContextType);

export const ContextGlobalComponent = ({ children }: ContextGlobalProps) => {
  const [ isActiveModalForm, setIsActiveModalForm ] = 
  useState<boolean>(false);

  const [ nameClass, setNameClass ] = useState<string>("");

  const [ errors, setErrors ] =
  useState<any>({
    formStudent: "",
    formEditStudent: "",
    formClass: "",
  });

  const [ classList, setClassList ] =
   useState<IOutputClass[] | []>([]);

   const [ studentsList, setStudentsList ] = 
   useState<IOutputStudents[] | []>([]);

  const [ foundClass, setFoundClass ] =
  useState<IOutputClassAndStudents | undefined>(undefined);

  const [ foundStudent, setFoundStudent ] =
  useState<IOutputStudents | undefined>(undefined);

  useEffect(() => {
    findClass(nameClass);
   }, [nameClass]);

   //* ==============================================================

  function resetErrors () {
    setTimeout(() => {
      setErrors("");
    }, 5000);
  };

  //* Class ==========================================================
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
      console.log(error?.response?.data);
    };
  };

  async function findClass (nameClass: string) {
    try {
      const { data } = await api.get(`/class/${nameClass}`);
      setFoundClass(data);
      setStudentsList(data.studentsList);
      return data.studentsList;
    } catch (error: any) {
      console.log(error?.response?.data);
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
      console.log(error?.response?.data);
      setErrors({formClass: error?.response?.data});
      resetErrors();
    };
  };

  async function deleteClass ( nameClass: string ) {
    try {
      await api.delete(`/class/${nameClass}`);
      await getAllClass();
      if ( classList.length === 1 ) window.location.reload();
    } catch (error: any) {
      console.log(error?.response?.data);
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

  const formEditStudent = useForm({
    firstName: "",
    lastName: "",
    participation: ""
  });

  async function refreshStudentsList (nameClass: string) {
    const { data } = await api.get(`/class/${nameClass}`);
    setStudentsList(data.studentsList);
  };

  async function addStudents (
      e: ChangeEvent<HTMLFormElement>, 
      nameClass: string
    ) {
    e.preventDefault();
    try {
      if ( !foundClass ) {
        throw new Error("Create a class before creating a student!.");
      };

      const [,] = await Promise.all([
          await api.post(`/students/${nameClass}`, {
            ...formStudents.form,
            participation: Number(formStudents.form.participation)
          }), 
          refreshStudentsList(nameClass)
        ]);
      formStudents.clearInputs();
    } catch (error: any) {
      console.log(error?.response?.data);
      setErrors({formStudent: error?.response?.data || error?.message});
      resetErrors();
    };
  };

  async function searchStudent (idStudent: string) {
    const { data } = await api.get(`/students/${idStudent}`);
    setFoundStudent(data);
  };

  async function editStudent (
      e: ChangeEvent<HTMLFormElement>, 
      nameClass: string, 
      idStudent: string 
    ) {
      e.preventDefault();
      try {
        await api.put(`/students/${nameClass}/${idStudent}`, 
        formEditStudent.form);
        formEditStudent.clearInputs();
        setIsActiveModalForm(false);
        await refreshStudentsList(nameClass);
    } catch (error: any) {
      console.log(error?.response?.data);
      setErrors({formEditStudent: error?.response?.data})
      resetErrors();
    };
  };

  async function deleteStudent ( nameClass: string, idStudent: string ) {
    try {
      await api.delete(`/students/${nameClass}/${idStudent}`);
      setIsActiveModalForm(false);
      await refreshStudentsList(nameClass);
    } catch (error: any) {
      console.log(error?.response?.data);
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
    searchStudent,
    foundStudent,
    editStudent,
    formEditStudent,
    deleteStudent,
    //*======================
    classList,
    addClass,
    formClass,
    getAllClass,
    getNameClass,
    findClass,
    foundClass,
    nameClass,
    deleteClass,
    //* ======================
    errors
  };
    
    return (
        <ContextGlobal.Provider value={store}>
            { children }
        </ContextGlobal.Provider>
    );
};
