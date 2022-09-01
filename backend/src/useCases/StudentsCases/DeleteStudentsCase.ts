import { 
  IDeleteStudentsModel
 } from "../../models/StudentsModels/IDeleteStudentsModel";

 import { 
  validateEmptyProperties,
  ValidateEmptyPropertiesOutput,
 } from "../../utils/validateEmptyProperties";

 import { 
   IStudentIdAndClassName
  } from "./StudentsCasesTypes";

  import {
    VerifyIfNotExistStudent,
    VerifyIfContainValuesInInput,
    VerifyIfNotExistClass
  } from "../../errors/StudentsErrors";

 export class DeleteStudentsCase {
  constructor (
    private readonly deleteStudentsModel: IDeleteStudentsModel,
  ){};

  public async deleteStudent (
    request: IStudentIdAndClassName
  ) {

    const validationResult: ValidateEmptyPropertiesOutput = 
      validateEmptyProperties(request);

    if (!validationResult.isValid) {
      throw new VerifyIfContainValuesInInput();
    };

    const  foundClassAndStudent = 
    await this.deleteStudentsModel.searchClassAndStudent(request);

    if (!foundClassAndStudent.foundClass) {
      throw new VerifyIfNotExistClass(request.nameClass);
    };

    if(!foundClassAndStudent.foundStudent) {
      throw new VerifyIfNotExistStudent();
    };

    await this.deleteStudentsModel.delete(request);

    return 200;
  };
 };