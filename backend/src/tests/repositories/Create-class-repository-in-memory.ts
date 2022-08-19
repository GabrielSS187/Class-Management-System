import { 
    ICreateClassModel,
    ICreateClassModelData 
  } from "../../models/ICreateClassModel";

  import { generateId } from "../../utils/generateId";

  export class CreateClassRepositoryInMemory 
  implements ICreateClassModel {
    public classList: ICreateClassModelData[] = [];

    async create ( data: ICreateClassModelData ) {
      const newClass = {
        ...data,
        id: generateId(),
      };

      this.classList.push(newClass);
    }; 

    async findClass ( nameClass: string ) {
      const found = 
      this.classList.find(( clas ) => clas.nameClass === nameClass);

      return !!found;
    };
  };
