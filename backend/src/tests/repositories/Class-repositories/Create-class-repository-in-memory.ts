import { 
    ICreateClassModel,
    ICreateClassModelData 
  } from "../../../models/ClassModels/ICreateClassModel";

  export class CreateClassRepositoryInMemory 
  implements ICreateClassModel {
    public classList: ICreateClassModelData[] = [];

    async create ( data: ICreateClassModelData ) {
      this.classList.push(data);
    }; 

    async findClass ( nameClass: string ) {
      const found = 
      this.classList.find(( className ) => className.nameClass === nameClass);

      return !!found;
    };
  };
