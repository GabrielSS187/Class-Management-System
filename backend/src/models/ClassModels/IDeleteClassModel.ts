export interface IClassModelData {
  nameClass: string;
  responsible: string;
};

export interface IDeleteClassModelData {
  nameClass: string;
};

export interface IDeleteClassModel {
  delete: ( data: IDeleteClassModelData ) =>
   Promise<void>;

   findClass: (data: IDeleteClassModelData) => 
   Promise<boolean>;
};