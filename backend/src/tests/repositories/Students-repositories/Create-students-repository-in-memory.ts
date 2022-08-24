import {  
  ICreateStudentsModel,
  ICreateStudentsModelData,
  INameClassModelData
} from "../../../models/StudentsModels/ICreateStudentsModel";

interface IClassList {
  idClass: string,
  nameClass: string;
  responsible: string;
  studentsList: ICreateStudentsModelData[],
};

export class CreateStudentsRepositoryInMemory
implements ICreateStudentsModel {

  public classList: IClassList[] = [
    {
      idClass: "1",
      nameClass: "Classe 1",
      responsible: "Responsavel 1",
      studentsList: []
    },
    {
      idClass: "2",
      nameClass: "Classe 2",
      responsible: "Responsavel 2",
      studentsList: []
    },
    {
      idClass: "3",
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

    return foundClass;
  };
};