export interface ICreateClassModelData {
  idClass: string;
  nameClass: string;
  responsible: string;
};

export interface ICreateClassModel {
  create: ( data: ICreateClassModelData ) => Promise<void>;
  findClass: ( nameClass: string ) => Promise<boolean>;
};