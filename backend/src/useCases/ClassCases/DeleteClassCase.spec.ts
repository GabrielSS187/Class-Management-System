import { 
  DeleteClassRepositoryInMemory
 } from "../../tests/repositories/Class-repositories/Delete-class-repository-in-memory";

 import { DeleteClassCase } from "./DeleteClassCase";

 import { VerifyIfNotClass } from "../../errors/ClassErrors";
import { CustomError } from "../../errors/CustomError";

 const sutFactory = () => {
  const deleteClassRepositoryInMemory =
  new DeleteClassRepositoryInMemory();

  const sut = new DeleteClassCase(
    deleteClassRepositoryInMemory
  );

  return {
    sut, 
    deleteClassRepositoryInMemory
  };
 }; 

 describe("Test DeleteClassCase.", () => {

  //* Test - 1
  it("Should remove the class from the list that has the same name passed by parameter of the function.", 
  async () => {
    const { 
      sut,
      deleteClassRepositoryInMemory
     } = sutFactory();

     const classList = deleteClassRepositoryInMemory.classList;

     expect(classList.length).toBe(3);

     //* Index da classe - 2
     const nameClass = "Classe 2";
     const deleteClass = await sut.deleteClass({nameClass});

     expect(classList.length).toBe(2);
     expect(classList).toEqual([
      { nameClass: 'Classe 1', responsible: 'Responsavel 1' },
      { nameClass: 'Classe 3', responsible: 'Responsavel 3' }
    ]);
    expect(deleteClass).toBe(200);
  });

   //* Test - 2
   it("!should throw an error if the name passed by parameter does not exist in the list of classes.", 
   async () => {
    const { 
      sut,
      deleteClassRepositoryInMemory
     } = sutFactory();

     const nameClass = "Class name not exist.";

     try {
      await sut.deleteClass({nameClass});
     } catch (error) {
      if ( error instanceof CustomError) {
        expect(error?.message).toEqual(new VerifyIfNotClass().message);
        expect(error?.statusCode).toEqual(404);
      };
     };
   });

 });