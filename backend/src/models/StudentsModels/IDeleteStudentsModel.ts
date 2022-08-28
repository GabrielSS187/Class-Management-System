export interface IDeleteStudentsDataModel {
  nameClass: string;
  idStudent: string;
};

interface IOutputDataModel {
  foundClass: boolean;
  foundStudent: boolean;
}; 

export interface IDeleteStudentsModel {
  delete: (data: IDeleteStudentsDataModel) 
  => Promise<void>; 

  searchClassAndStudent: (data: IDeleteStudentsDataModel) => 
  Promise<IOutputDataModel>;
};