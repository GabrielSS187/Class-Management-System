export interface IOutputClass {
  id_class: string;
  name_class: string;
  responsible: string;
};

export interface IOutputStudents {
  id_student: string;
  first_name: string;
  last_name: string;
  participation: string;
};

export interface IOutputClassAndStudents {
  nameClass: string;
  responsible: string;
  studentsList: IOutputStudents[] | [];
};