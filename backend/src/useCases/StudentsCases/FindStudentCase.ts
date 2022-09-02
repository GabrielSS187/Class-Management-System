import { 
  IFindStudentModel
 } from "../../models/StudentsModels/IFindStudentModel";

 export class FindStudentCase {
  constructor(
    private readonly findStudentModel: IFindStudentModel
  ){};

  async find (idStudent: string) {
    const foundStudent = await
    this.findStudentModel.find(idStudent);

    return foundStudent;
  };
 };