import { 
  EditStudentsRepositoryInMemory
 } from "../../tests/repositories/Students-repositories/Edit-students-repository-in-memory";

 import { EditStudentsCase } from "./EditStudentsCase";

 import { 
   CheckIfParticipationIsValid,
  VerifyIfContainValuesInInput,
  VerifyIfNotExistClass,
  VerifyIfNotExistStudent
 } from "../../errors/StudentsErrors";
  
 import { CustomError } from "../../errors/CustomError";

 const sutFactory = () => {
  const editStudentsRepositoryInMemory =
  new EditStudentsRepositoryInMemory();

  const sut = new EditStudentsCase(
    editStudentsRepositoryInMemory
  );

  return {
    sut,
    editStudentsRepositoryInMemory,
  };
 };

 describe("Tests EditStudentsCase.", () => {

  //* Test - 1
  it("should edit the user chosen by Student id in the class that has the name chosen by nameClass.", 
  async () => {

    expect.assertions(8);

    const { 
      sut,
      editStudentsRepositoryInMemory
     } = sutFactory();

     const nameClass = "Classe 2";
     const idStudent = "2";

     const classList = 
     editStudentsRepositoryInMemory.classList

     const foundClassAndStudent =
     await editStudentsRepositoryInMemory.findClassAndStudent({nameClass, idStudent}); 
    
     const editStudent = {
      firstName: "Erika",
      lastName: "Vitoria",
      participation: 100,
     };

     const edit = await sut.editStudent(editStudent , {nameClass, idStudent});

     expect(foundClassAndStudent.classFound).toBeTruthy();
     expect(foundClassAndStudent.classFound).toBeDefined();
     expect(foundClassAndStudent.classFound).not.toBeNull();

     expect(foundClassAndStudent.studentFound).toBeTruthy();
     expect(foundClassAndStudent.studentFound).toBeDefined();
     expect(foundClassAndStudent.studentFound).not.toBeNull();
     expect(foundClassAndStudent.studentFound).toEqual({
        idStudent: "2",
        firstName: "Erika",
        lastName: "Vitoria",
        participation: 100,
     });
     
     expect(edit).toBe(200);
  });

  //* Test - 2
  it("should edit a student with only one property chosen without throwing any errors.", 
  async () => {

    expect.assertions(8)

    const { 
      sut,
      editStudentsRepositoryInMemory
     } = sutFactory();

     const nameClass = "Classe 2";
     const idStudent = "2";

     const foundClassAndStudent =
     await editStudentsRepositoryInMemory.findClassAndStudent({nameClass, idStudent}); 
    
     const editStudent = {
      firstName: "Erika",
     };

     const edit = await sut.editStudent(editStudent , {nameClass, idStudent});

     expect(foundClassAndStudent.classFound).toBeTruthy();
     expect(foundClassAndStudent.classFound).toBeDefined();
     expect(foundClassAndStudent.classFound).not.toBeNull();

     expect(foundClassAndStudent.studentFound).toBeTruthy();
     expect(foundClassAndStudent.studentFound).toBeDefined();
     expect(foundClassAndStudent.studentFound).not.toBeNull();
     expect(foundClassAndStudent.studentFound).toEqual({
        idStudent: "2",
        firstName: "Erika",
        lastName: "Santos",
        participation: 80,
     });
     
     expect(edit).toBe(200);
  });

  //* Test - 3
  it("should throw an error if one of the necessary parameters idStudent and nameClass is not passed by parameter.", 
  async () => {
    expect.assertions(2);

    const { 
      sut,
      editStudentsRepositoryInMemory
     } = sutFactory();

     const nameClass = "Classe 2";
     const idStudent = "";

     const editStudent = {
      firstName: "Erika",
     };

     try {
      await sut.editStudent(editStudent , {nameClass, idStudent});
     } catch (error) {
      if ( error instanceof CustomError ) {
        expect(error.message)
        .toEqual(new VerifyIfContainValuesInInput().message);
        expect(error.statusCode).toBe(406);
      };
     };
  });

  it("should throw an error if the class is not the class name is not found in the list.", 
  async () => {
    expect.assertions(2);

    const { 
      sut,
      editStudentsRepositoryInMemory
     } = sutFactory();

     const nameClass = "Classe not exist";
     const idStudent = "2";

     const editStudent = {
      firstName: "Erika",
     };

     try {
      await sut.editStudent(editStudent , {nameClass, idStudent});
     } catch (error) {
      if ( error instanceof CustomError ) {
        expect(error.message)
        .toEqual(new VerifyIfNotExistClass(nameClass).message);
        expect(error.statusCode).toBe(404);
      };
     };
  });

  //* Test - 4
  it("It should throw an error if student id is not found in the list.", 
  async () => {
    expect.assertions(2);

    const { 
      sut,
      editStudentsRepositoryInMemory
     } = sutFactory();

     const nameClass = "Classe 2";
     const idStudent = "2000";

     const editStudent = {
      firstName: "Erika",
     };

     try {
      await sut.editStudent(editStudent , {nameClass, idStudent});
     } catch (error) {
      if ( error instanceof CustomError ) {
        expect(error.message)
        .toMatch(new VerifyIfNotExistStudent().message);
        expect(error.statusCode).toBe(404);
      };
     };
  });

  //* Test - 5
  it("The properties of the chosen student object must be the same if the object passed by parameter is empty.", 
  async () => {
    expect.assertions(8);

    const { 
      sut,
      editStudentsRepositoryInMemory
     } = sutFactory();

     const nameClass = "Classe 2";
     const idStudent = "2";

     const classList = 
     editStudentsRepositoryInMemory.classList

     const foundClassAndStudent =
     await editStudentsRepositoryInMemory.findClassAndStudent({nameClass, idStudent}); 
    
     const editStudent = {};

     const edit = await sut.editStudent(editStudent , {nameClass, idStudent});

     expect(foundClassAndStudent.classFound).toBeTruthy();
     expect(foundClassAndStudent.classFound).toBeDefined();
     expect(foundClassAndStudent.classFound).not.toBeNull();

     expect(foundClassAndStudent.studentFound).toBeTruthy();
     expect(foundClassAndStudent.studentFound).toBeDefined();
     expect(foundClassAndStudent.studentFound).not.toBeNull();
     expect(foundClassAndStudent.studentFound).toEqual({
        idStudent: "2",
        firstName: "Lany",
        lastName: "Santos",
        participation: 80,
     });
     
     expect(edit).toBe(200);
  });
  
  //* Test - 6
  it("should throw an error if the stake value is less than 0.", 
  async () => {
    expect.assertions(2);

  const { 
    sut,
    editStudentsRepositoryInMemory
    } = sutFactory();

    const nameClass = "Classe 2";
    const idStudent = "2";

    const editStudent = {
    participation: -1,
    };

    try {
    await sut.editStudent(editStudent , {nameClass, idStudent});
    } catch (error) {
    if ( error instanceof CustomError ) {
        expect(error.message)
        .toMatch(new CheckIfParticipationIsValid().message);
        expect(error.statusCode).toBe(406);
      };
    };
  });

  //* Test - 7
  it("should throw an error if the stake value is greater than 100.", 
  async () => {
    expect.assertions(2);

  const { 
    sut,
    editStudentsRepositoryInMemory
    } = sutFactory();

    const nameClass = "Classe 2";
    const idStudent = "2";

    const editStudent = {
    participation: 150,
    };

    try {
    await sut.editStudent(editStudent , {nameClass, idStudent});
    } catch (error) {
    if ( error instanceof CustomError ) {
        expect(error.message)
        .toMatch(new CheckIfParticipationIsValid().message);
        expect(error.statusCode).toBe(406);
      };
    };
  });

 });