import { CustomError } from "./CustomError";

//* ========================================================
//* CreateClassCase
export class VerifyIfContainRequestValues 
extends CustomError {
  constructor () {
    super (
      "check if the name of the class or the name of the person responsible is not missing!.", 
       406
      );
  };
};

export class VerifyIfExistClass extends CustomError {
  constructor (public nameClass: string) {
    super(
      `There is already a class with that name: ( ${nameClass} )!.`, 
       409
      );
  };
};

export class EmptyFieldError extends CustomError {
  constructor(){
    super("Fill all fields with at least 2 letters!.", 406);
  };
};

//* ======================================================
//* GetAllsClassCase
export class VerifyIfNotClassList extends CustomError {
  constructor () {
    super(
      `Empty class list!.`, 
       404
      );
  };
};
//* =======================================================

//* =======================================================
//* FindClassCase
//* DeleteClassCase
export class VerifyIfNotClass extends CustomError {
  constructor () {
    super(
      `Class not found!.`, 
       404
      );
  };
};
//* =======================================================