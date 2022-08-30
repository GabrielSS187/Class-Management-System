export interface IStudentsListModelData {
  idStudent: string;
  firstName: string;
  lastName: string;
  participation: string;
};

export interface IClassModelData {
  nameClass: string;
  responsible: string;
  studentsList: IStudentsListModelData[];
};

export interface IFindClassModelData {
  nameClass: string;
};

export interface IFindClassModel {
  find: ( data: IFindClassModelData ) => 
  Promise<IClassModelData | boolean>;
};