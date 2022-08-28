 import {
  DeleteStudentsRepositoryInMemory 
 } from "../../tests/repositories/Students-repositories/Delete-students-repository-in-memory";

 import { DeleteStudentsCase } from "./DeleteStudentsCase";

 import {
  VerifyIfNotExistStudent,
  VerifyIfContainValuesInInput,
  VerifyIfNotExistClass
} from "../../errors/StudentsErrors";

import { CustomError } from "../../errors/CustomError";

const sutFactory = () => {
  const deleteStudentsRepositoryInMemory  =
  new DeleteStudentsRepositoryInMemory();

  const sut = 
  new DeleteStudentsCase(deleteStudentsRepositoryInMemory);

  return {
    sut,
    deleteStudentsRepositoryInMemory,
  };
};

describe("Test DeleteClassCase", () => {

  //* Test - 1
  it("should delete the student from the class without generating any errors.", 
  async () => {

    expect.assertions(4);

    const {
      sut,
      deleteStudentsRepositoryInMemory
    } = sutFactory();

    const classList = deleteStudentsRepositoryInMemory.classList;

    const nameClass = "Classe 2";
    const idStudent = "2";

    const foundClass = classList
    .find((item) => item.nameClass === nameClass);

    expect(foundClass?.studentsList.length).toBe(2);

    const deleteStudent = 
    await sut.deleteStudent({nameClass, idStudent});

    expect(foundClass?.studentsList.length).toBe(1);
    expect(foundClass?.studentsList).toEqual([
      {
        idStudent: "1",
        firstName: "Gabriel",
        lastName: "Silva",
        participation: 50,
      }
    ]);
    expect(deleteStudent).toBe(200);
  });

  //* Test - 2
  it("should throw an error if the nameClass or idStudent is not passed by parameter.", 
  async () => {

    expect.assertions(2);

    const {
      sut,
      deleteStudentsRepositoryInMemory
    } = sutFactory();

    const nameClass = "Classe 2";
    const idStudent = "";

    try {
      await sut.deleteStudent({nameClass, idStudent});
    } catch (error) {
      if ( error instanceof CustomError ) {
        expect(error.message)
        .toMatch(new VerifyIfContainValuesInInput().message);
        expect(error.statusCode).toBe(406);
      };
    };
  });

  //* Test - 3
  it("should throw an error if the class is not found.", 
  async () => {

    expect.assertions(2);

    const {
      sut,
      deleteStudentsRepositoryInMemory
    } = sutFactory();

    const nameClass = "TDD";
    const idStudent = "2";

    try {
      await sut.deleteStudent({nameClass, idStudent});
    } catch (error) {
      if ( error instanceof CustomError ) {
        expect(error.message)
        .toMatch(new VerifyIfNotExistClass(nameClass).message);
        expect(error.statusCode).toBe(404);
      };
    };
  });

  //* Test - 4
  it("should throw an error if the student is not found.", 
  async () => {

    expect.assertions(2);

    const {
      sut,
      deleteStudentsRepositoryInMemory
    } = sutFactory();

    const nameClass = "Classe 2";
    const idStudent = "3000";

    try {
      await sut.deleteStudent({nameClass, idStudent});
    } catch (error) {
      if ( error instanceof CustomError ) {
        expect(error.message)
        .toMatch(new VerifyIfNotExistStudent().message);
        expect(error.statusCode).toBe(404);
      };
    };
  });

});