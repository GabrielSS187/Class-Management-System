export interface IClassModelData {
  idClass: string;
  nameClass: string;
  responsible: string;
};

export interface IGetAllsClassModel {
  getAll: () => Promise<IClassModelData[]>;
};