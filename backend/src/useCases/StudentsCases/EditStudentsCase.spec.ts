import { 
  EditStudentsRepositoryInMemory
 } from "../../tests/repositories/Students-repositories/Edit-students-repository-in-memory";

 import { EditStudentsCase } from "./EditStudentsCase";

 import { 
  VerifyIfContainValuesInInput,
  VerifyIfNotExistClass,
  VerifyIfNotExistStudent
 } from "../../errors/StudentsErrors";

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

 });