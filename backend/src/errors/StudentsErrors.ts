import { CustomError } from "./CustomError";

//* ==================================================================
//* CreateClassCase
export class VerifyIfContainRequestValues 
extends CustomError {
  constructor () {
    super (
      "Check that none of this information is missing: last name, first name, participation!.", 
       406
      );
  };
};

export class VerifyIfNotExistClass extends CustomError {
  constructor (public nameClass: string) {
    super(
      `No class with that name was found: ( ${nameClass} )!.`, 
       404
      );
  };
};

export class CheckThatClassDoesNotExceedLimit extends CustomError {
  constructor(){
    super("Each class can only contain a minimum of 7 students. You already have that number of students!.",
      406
    );
  };
};

export class CheckIfParticipationIsValid extends CustomError {
  constructor(){
    super("Participation cannot be less than 0 or greater than 100!.",
      406
    );
  };
};

export class EmptyFieldError extends CustomError {
  constructor(){
    super("Fill all fields with at least 2 letters!.", 406);
  };
};

//* =============================================================
//* EditStudentCase
export class VerifyIfContainValuesInInput  extends CustomError {
  constructor () {
    super(
      `Check that the desired class name or student id is not missing!.`, 
       406
      );
  };
};

export class VerifyIfNotExistStudent extends CustomError {
  constructor () {
    super(
      `This student does not exist in this class!.`, 
       404
      );
  };
};