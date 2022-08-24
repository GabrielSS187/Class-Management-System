export interface ICreateStudentsModelData {
  idStudent: string;
  firstName: string;
  lastName: string;
  participation: number;
};

interface IOutputClassListData {
  idClass: string;
  nameClass: string;
  responsible: string;
  studentsList: ICreateStudentsModelData[];
};

export interface INameClassModelData {
  nameClass: string;
};

export interface ICreateStudentsModel {
  create: ( 
      data: ICreateStudentsModelData, 
      nameClass: INameClassModelData 
    ) => Promise<void>;

    findClass: (nameClass: INameClassModelData) 
    => Promise<IOutputClassListData | undefined>;
};