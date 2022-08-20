export interface IClassModelData {
  nameClass: string;
  responsible: string;
};

export interface IGetAllsClassModel {
  getAll: () => Promise<IClassModelData[]>;
};