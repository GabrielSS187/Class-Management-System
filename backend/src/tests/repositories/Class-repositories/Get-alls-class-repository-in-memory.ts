import { 
  IGetAllsClassModel,
  IClassModelData,
 } from "../../../models/ClassModels/IGetAllsClassModel";

export class GetAllClassRepositoryInMemory 
implements IGetAllsClassModel {
  public classList: IClassModelData[] = [];

  public async getAll () {
    return this.classList;
  };
  
  public addItemsClassList (item: any) {
    this.classList.push(item);
  };
};