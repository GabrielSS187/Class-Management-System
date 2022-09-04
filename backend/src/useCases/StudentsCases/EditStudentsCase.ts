import {
  IEditStudentsModel
} from "../../models/StudentsModels/IEditStudentsModel";

import { 
  IEditStudentsRequest,
  IStudentIdAndClassName
} from "./StudentsCasesTypes";

import { 
  validateEmptyProperties,
  ValidateEmptyPropertiesOutput,
 } from "../../utils/validateEmptyProperties";

import { 
  VerifyIfNotExistClass,
  VerifyIfNotExistStudent,
  VerifyIfContainValuesInInput,
  CheckIfParticipationIsValid,
 } from "../../errors/StudentsErrors";


 export class EditStudentsCase {
  constructor (
    private readonly editStudentsModel: IEditStudentsModel
  ){};

  //* Paramêtro ( data ) refere-se a o ( IEditStudentsModelData ).
  //* Paramêtro ( input ) refer-se a o ( IStudentIdAndClassName ).
  public async editStudent (
    request: IEditStudentsRequest, 
    input: IStudentIdAndClassName) {

      let { 
        firstName,
        lastName,
        participation
       } = request;

       const { nameClass, idStudent } = input;

      const validationResultInput: ValidateEmptyPropertiesOutput = 
      validateEmptyProperties(input);

      if ( !validationResultInput.isValid ){
        throw new VerifyIfContainValuesInInput();
      };

      const classAndStudent = 
      await this.editStudentsModel.
      findClassAndStudent({ nameClass, idStudent });

      if ( !classAndStudent.classFound ){
        throw new VerifyIfNotExistClass(nameClass);
      };

      if ( !classAndStudent.studentFound ){
        throw new VerifyIfNotExistStudent();
      };

      if ( participation! < 0 || participation! > 100 ) {
        throw new CheckIfParticipationIsValid();
      };
      
      if ( !participation ) request.participation = 1;

      if ( !firstName || firstName!.trim().length < 2 ) {
        request.firstName = classAndStudent.studentFound.firstName
      };

      if ( !lastName || firstName!.trim().length < 2 ) {
        request.lastName = classAndStudent.studentFound.lastName
      };

      if ( !participation ) {
        request.participation = classAndStudent.studentFound.participation
      };
      
      await this.editStudentsModel.edit(request, classAndStudent, {nameClass, idStudent});

      return 200;
    };
 };