import {  
  ICreateStudentsModel,
  ICreateStudentsModelData,
  INameClassModelData
} from "../../../models/StudentsModels/ICreateStudentsModel";

interface IClassList {
  nameClass: string;
  responsible: string;
  studentsList: ICreateStudentsModelData[],
};

export class CreateStudentsRepositoryInMemory
implements ICreateStudentsModel {

  public classList: IClassList[] = [
    {
      nameClass: "Classe 1",
      responsible: "Responsavel 1",
      studentsList: []
    },
    {
      nameClass: "Classe 2",
      responsible: "Responsavel 2",
      studentsList: []
    },
    {
      nameClass: "Classe 3",
      responsible: "Responsavel 3",
      studentsList: []
    }
  ];

  public async create ( 
    data: ICreateStudentsModelData,
    { nameClass }: INameClassModelData
    ) {
    const foundClass = 
    this.classList.find((searchClass) => searchClass.nameClass === nameClass);
    foundClass!.studentsList.push(data);
  };

  public async findClass ({ nameClass }: INameClassModelData) {
    const foundClass = 
    this.classList.find((searchClass) => searchClass.nameClass === nameClass);

    return !!foundClass;
  };
};