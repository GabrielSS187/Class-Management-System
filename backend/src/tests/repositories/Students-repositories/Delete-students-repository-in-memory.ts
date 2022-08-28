import { 
  IDeleteStudentsModel,
  IDeleteStudentsDataModel
 } from "../../../models/StudentsModels/IDeleteStudentsModel";


 interface IStudentsList {
  idStudent: string;
  firstName: string;
  lastName: string;
  participation: number;
};

interface IClassList {
  idClass: string;
  nameClass: string;
  responsible: string;
  studentsList: IStudentsList[],
}; 

 export class DeleteStudentsRepositoryInMemory 
 implements IDeleteStudentsModel {
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
      studentsList: [
        {
          idStudent: "1",
          firstName: "Gabriel",
          lastName: "Silva",
          participation: 50,
        },
        {
          idStudent: "2",
          firstName: "Lany",
          lastName: "Santos",
          participation: 80,
        }
     ]
    },
    {
      idClass: "3",
      nameClass: "Classe 3",
      responsible: "Responsavel 3",
      studentsList: []
    }
  ];

  public async delete ({
    nameClass,
    idStudent
  }: IDeleteStudentsDataModel) {
    const foundClass = 
    this.classList.find((item ) => item.nameClass === nameClass);

    const indexStudent = foundClass?.studentsList
    .findIndex((item ) => item.idStudent === idStudent)!;
    foundClass?.studentsList.splice(indexStudent, 1);
  };

  public async searchClassAndStudent ({
    nameClass,
    idStudent
  }: IDeleteStudentsDataModel) {
    const foundClass = this.classList
    .find((item) => item.nameClass === nameClass);

    const foundStudent = foundClass?.studentsList
    .find((item ) => item.idStudent === idStudent);
    
    return {
      foundClass: !!foundClass,
      foundStudent: !!foundStudent,
    };
  };
 };