import { 
  CreateStudentsRepositoryInMemory
 } from "../../tests/repositories/Students-repositories/Create-students-repository-in-memory";

 import { CreateStudentsCase } from "./CreateStudentsCase";

 import { 
  VerifyIfNotExistClass,
  VerifyIfContainRequestValues
 } from "../../errors/StudentsErrors";

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
 });