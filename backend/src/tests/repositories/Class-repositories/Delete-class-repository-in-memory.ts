import { 
  IDeleteClassModel,
  IDeleteClassModelData,
  IClassModelData
 } from "../../../models/ClassModels/IDeleteClassModel";

 export class DeleteClassRepositoryInMemory
 implements IDeleteClassModel {
  public classList: IClassModelData[] = [
    {
      nameClass: "Classe 1",
      responsible: "Responsavel 1",
    },
    {
      nameClass: "Classe 2",
      responsible: "Responsavel 2",
    },
    {
      nameClass: "Classe 3",
      responsible: "Responsavel 3",
    }
  ];

  public async delete ({ nameClass }: IDeleteClassModelData) {
    const indexClass = 
    this.classList.findIndex((item) => item.nameClass === nameClass);
    this.classList.splice(indexClass, 1);
  };

  public async findClass ({ nameClass }: IDeleteClassModelData) {
    const foundClass = 
    this.classList.find(( item ) => item.nameClass === nameClass);

    return foundClass!;
  };
 };