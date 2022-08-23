export interface ICreateStudentsModelData {
  idStudent: string;
  firstName: string;
  lastName: string;
  participation: number;
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
    => Promise<boolean>;
};