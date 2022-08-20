import { 
  IFindClassModel,
  IFindClassModelData,
  IClassModelData
 } from "../../../models/IFindClassModel";

 export class FindClassRepositoryInMemory 
 implements IFindClassModel {
  public classList: IClassModelData[] = [];

  public async find ({ nameClass }: IFindClassModelData) {
    const foundClass = 
    this.classList.find(( item ) => item.nameClass === nameClass);

    return foundClass!;
  };

  public addItemsClassList (item: any) {
    this.classList.push(item);
  };
 };