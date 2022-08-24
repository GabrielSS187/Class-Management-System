import { 
  IEditStudentsModel,
  IEditStudentsModelData,
  IStudentIdAndClassName,
  IOutputFindClassAndStudent
} from "../../../models/StudentsModels/IEditStudentsModel";

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

export class EditStudentsRepositoryInMemory
implements IEditStudentsModel {
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

  public async edit (
     data: IEditStudentsModelData,
     callback?: IOutputFindClassAndStudent) {

      const {
        firstName,
        lastName,
        participation
      } = data;
    
     const { classFound, studentFound } = callback!;


     studentFound!.firstName = firstName!
     studentFound!.lastName = lastName!
     studentFound!.participation = participation!
  };

  public async findClassAndStudent ({ nameClass, idStudent }
    : IStudentIdAndClassName) {
      const classFound = this.classList?.find((item) => 
      item.nameClass === nameClass);

      const studentFound = classFound?.studentsList
      .find((item) => item.idStudent === idStudent);

        return {
          classFound,
          studentFound
        };
    };
};