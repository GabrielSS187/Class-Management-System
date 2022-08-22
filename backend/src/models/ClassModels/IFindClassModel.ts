export interface IClassModelData {
  nameClass: string;
  responsible: string;
};

export interface IFindClassModelData {
  nameClass: string;
};

export interface IFindClassModel {
  find: ( data: IFindClassModelData ) => 
  Promise<IClassModelData>;
};