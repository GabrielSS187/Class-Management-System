import { 
  CreateStudentsRepositoryInMemory
 } from "../../tests/repositories/Students-repositories/Create-students-repository-in-memory";

 import { CreateStudentsCase } from "./CreateStudentsCase";

 import { 
  VerifyIfNotExistClass,
  VerifyIfContainRequestValues,
  CheckThatClassDoesNotExceedLimit,
  CheckIfParticipationIsValid
 } from "../../errors/StudentsErrors";
import { CustomError } from "../../errors/CustomError";

 const sutFactory = () => {
  const createStudentsRepositoryInMemory =
  new CreateStudentsRepositoryInMemory();

  const sut =
  new CreateStudentsCase(createStudentsRepositoryInMemory);

  return {
    sut,
    createStudentsRepositoryInMemory
  };
 };

 describe("tests CreateStudentsCase.", () => {

  //* Test - 1
  it("should create a student without any errors.", async () => {

    expect.assertions(8);

    const {
      sut,
      createStudentsRepositoryInMemory
    } = sutFactory();

    const nameClass = "Classe 2";
    const newStudent = {
      firstName: "Gabriel",
      lastName: "Silva",
      participation: 50,
    };

    await sut.createStudent(newStudent, {nameClass});

    const findClassSpecific = createStudentsRepositoryInMemory
    .classList.find((item) => item.nameClass === nameClass);;

    //* Verificando o array studentsList
    expect(findClassSpecific).toHaveProperty("studentsList");
    expect(findClassSpecific).toBeTruthy();
    expect(findClassSpecific?.studentsList.length).not.toBe(0);
    expect(findClassSpecific?.studentsList.length).toBe(1);

    // //* Verificando si tem um objeto no array studentsList
    expect(findClassSpecific?.studentsList[0]).not.toBeNull();
    expect(findClassSpecific?.studentsList[0]).toBeTruthy();
    expect(findClassSpecific?.studentsList[0]).toBeDefined();
    expect(findClassSpecific?.studentsList[0]).toHaveProperty("idStudent");
  });

  //* Test - 2
  it("should throw an error if the user does not fill in the properties of the request object", 
  async () => {

    expect.assertions(3);

    const {
      sut,
      createStudentsRepositoryInMemory
    } = sutFactory();

    const nameClass = "Classe 2";

    const foundClass = await createStudentsRepositoryInMemory
    .findClass({nameClass});

    const newStudent = {
      firstName: "Gabriel",
      lastName: "",
      participation: 50,
    };

    try {
      await sut.createStudent(newStudent ,{nameClass});
    } catch (error) {
      if ( error instanceof CustomError ) {
        expect(error.message)
        .toEqual(new VerifyIfContainRequestValues().message);
        expect(error.statusCode).toBe(406);
      };
    };

    expect(foundClass?.studentsList.length).toBe(0);
  });

  //* Test - 3
  it("should throw an error if the class name doesn't exist in the list.", 
  async () => {

    expect.assertions(2);

    const {
      sut,
      createStudentsRepositoryInMemory
    } = sutFactory();

    const nameClass = "Class not exist.";

    const newStudent = {
      firstName: "Gabriel",
      lastName: "Silva",
      participation: 50,
    };

    try {
      await sut.createStudent(newStudent ,{nameClass});
    } catch (error) {
      if ( error instanceof CustomError ) {
        expect(error.message)
        .toEqual(new VerifyIfNotExistClass(nameClass).message);
        expect(error.statusCode).toBe(404);
      };
    };
  });

  //* Test - 4
  it ("should throw an error if the student list is greater than 7.", 
  async () => {

    expect.assertions(3);

    const {
      sut,
      createStudentsRepositoryInMemory
    } = sutFactory();

    const nameClass = "Classe 2";

    const classFound = await
    createStudentsRepositoryInMemory.findClass({nameClass});

    createStudentsRepositoryInMemory.populateStudentsList(nameClass);

    const newStudent1 = {
      firstName: "Gabriel",
      lastName: "Silva",
      participation: 50,
    };

    const newStudent2 = {
      firstName: "Erika",
      lastName: "Vitoria",
      participation: 50,
    };

    await sut.createStudent(newStudent1 ,{nameClass});

    try {
      await sut.createStudent(newStudent2 ,{nameClass});
    } catch (error) {
      if ( error instanceof CustomError ) {
        expect(error.message)
        .toEqual(new CheckThatClassDoesNotExceedLimit().message);
        expect(error.statusCode).toBe(406);
      };
    };
    
    expect(classFound?.studentsList.length).toBe(7);
  });

  //* Test - 5
  it("should throw an error if the stake value is less than 0.", 
  async () => {
    expect.assertions(3);

    const {
      sut,
      createStudentsRepositoryInMemory
    } = sutFactory();

    const nameClass = "Classe 2";

    const classFound = await
    createStudentsRepositoryInMemory.findClass({nameClass});

    const newStudent1 = {
      firstName: "Gabriel",
      lastName: "Silva",
      participation: -1,
    };

    try {
      await sut.createStudent(newStudent1 ,{nameClass});
    } catch (error) {
      if ( error instanceof CustomError ) {
        expect(error.message)
        .toEqual(new CheckIfParticipationIsValid().message);
        expect(error.statusCode).toBe(406);
      };
    };
    
    expect(classFound?.studentsList.length).toBe(0);
  });

  //* Test - 6
  it("should throw an error if the stake value is greater than 100.", 
  async () => {
    expect.assertions(3);

    const {
      sut,
      createStudentsRepositoryInMemory
    } = sutFactory();

    const nameClass = "Classe 2";

    const classFound = await
    createStudentsRepositoryInMemory.findClass({nameClass});

    const newStudent1 = {
      firstName: "Gabriel",
      lastName: "Silva",
      participation: 150,
    };

    try {
      await sut.createStudent(newStudent1 ,{nameClass});
    } catch (error) {
      if ( error instanceof CustomError ) {
        expect(error.message)
        .toEqual(new CheckIfParticipationIsValid().message);
        expect(error.statusCode).toBe(406);
      };
    };
    
    expect(classFound?.studentsList.length).toBe(0);
  });

 });