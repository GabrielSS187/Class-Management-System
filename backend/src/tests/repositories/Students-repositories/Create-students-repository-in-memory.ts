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

  public populateStudentsList ( nameClass: string) {
     const foundClass = this.classList
      .find((item) => item.nameClass === nameClass);

     foundClass!.studentsList.push(
      {
        idStudent: "1",
        firstName: "estudante 1",
        lastName: "estudante 1",
        participation: 50,
      },
      {
        idStudent: "2",
      firstName: "estudante 2",
      lastName: "estudante 2",
      participation: 50,
      },
      {
        idStudent: "3",
        firstName: "estudante 3",
        lastName: "estudante 3",
        participation: 50,
      },
      {
        idStudent: "4",
        firstName: "estudante 4",
        lastName: "estudante 4",
        participation: 50,
      },
      {
        idStudent: "5",
        firstName: "estudante 5",
        lastName: "estudante 5",
        participation: 50,
      },
      {
        idStudent: "6",
        firstName: "estudante 6",
        lastName: "estudante 6",
        participation: 50,
      }
     );
  }
};