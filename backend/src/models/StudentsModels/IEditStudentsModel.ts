interface IOutputStudentsListData {
  idStudent: string;
  firstName: string;
  lastName: string;
  participation: number;
};

interface IOutputClassListData {
  idClass: string;
  nameClass: string;
  responsible: string;
  studentsList: IOutputStudentsListData[];
};

export interface IOutputFindClassAndStudent {
  classFound: IOutputClassListData | undefined;
  studentFound: IOutputStudentsListData | undefined;
};

export interface IEditStudentsModelData {
  firstName?: string;
  lastName?: string;
  participation?: number;
};

export interface IStudentIdAndClassName {
  nameClass: string;
  idStudent: string;
};

export interface IEditStudentsModel {
  edit: ( 
    data: IEditStudentsModelData, 
    callback?: IOutputFindClassAndStudent)
  => Promise<void>;
  
  findClassAndStudent: (input: IStudentIdAndClassName) 
  => Promise<IOutputFindClassAndStudent>;
};