import { 
  IFindClassModel,
  IFindClassModelData,
  IClassModelData
 } from "../../../models/ClassModels/IFindClassModel";

 export class FindClassRepositoryInMemory 
 implements IFindClassModel {
  public classList: IClassModelData[] = [
    {
      nameClass: "Classe 1",
      responsible: "Responsavel 1",
      studentsList: [],
    },
    {
      nameClass: "Classe 2",
      responsible: "Responsavel 2",
      studentsList: [],
    }
  ];

  public async find ({ nameClass }: IFindClassModelData) {
    const foundClass = 
    this.classList.find(( item ) => item.nameClass === nameClass);

    return foundClass!;
  };

  public addItemsClassList (item: any) {
    this.classList.push(item);
  };
 };