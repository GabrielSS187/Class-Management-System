import { 
  GetAllClassRepositoryInMemory
 } from "../../tests/repositories/Class-repositories/Get-alls-class-repository-in-memory";

 import { GetAllsClassCase } from "./GetAllsClassCase";

 import { VerifyIfNotClassList } from "../../errors/ClassErrors";
import { CustomError } from "../../errors/CustomError";

 const sutFactory = () => {
  const getAllClassRepositoryInMemory = 
  new GetAllClassRepositoryInMemory();

  const sut = 
  new GetAllsClassCase(getAllClassRepositoryInMemory);

  return {
    sut,
    getAllClassRepositoryInMemory
  };
 };

 describe("Test GetAllsClassCase.", () => {

  //* Test - 1
  it("should return all items in the list.", async () => {
    const { 
      sut,
      getAllClassRepositoryInMemory
     } = sutFactory();

     getAllClassRepositoryInMemory.addItemsClassList(
      {
        nameClass: "Classe 1",
        responsible: "Responsavel 1",
      }
     );

     getAllClassRepositoryInMemory.addItemsClassList(
      { 
        nameClass: "Classe 2",
        responsible: "Responsavel 2", 
      }
     );

     getAllClassRepositoryInMemory.addItemsClassList(
      {
        nameClass: "Classe 3",
        responsible: "Responsavel 3",
      }
     );

     const classList = await sut.getAllsClass();

     expect(classList.length).toBeGreaterThan(0);
     expect(classList.length).toBe(3);
  });

  //* Test - 2
  it("should throw an error if there are no items in the list.", async () => {
    const { 
      sut,
     } = sutFactory();

     try { 
       await sut.getAllsClass();
     } catch (error) {
      if ( error instanceof CustomError) {
        expect(error?.message).toEqual(new VerifyIfNotClassList()?.message);
        expect(error?.statusCode).toEqual(404);
      };
     };
  });
  
 });