import { 
  FindClassRepositoryInMemory
 } from "../../tests/repositories/Class-repositories/Find-class-repository-in-memory";

 import { FindClassCase } from "./FindClassCase";

 import { VerifyIfNotClass } from "../../errors/ClassErrors";
import { CustomError } from "../../errors/CustomError";

 const sutFactory = () => {
  const findClassRepositoryInMemory = 
  new FindClassRepositoryInMemory();

  const sut = new FindClassCase(
    findClassRepositoryInMemory
  );

  return {
    sut,
    findClassRepositoryInMemory
  };
 };

 describe("Test FindClassCase.", () => {

  //* Test -1
  it("should return a class with the same name as passed by the function parameter, without any error",
   async () => {

    const { 
      sut,
      findClassRepositoryInMemory
     } = sutFactory();

     const nameClass = "Classe 2";
     const foundClass = await sut.findClass({nameClass});


     expect(foundClass).toEqual({
      nameClass: "Classe 2",
      responsible: "Responsavel 2",
      studentsList: [],
    });

   });


   //* Test - 2
   it("should return an error if there is no class found with that name", 
   async () => {
    const { 
      sut,
     } = sutFactory();

     const nameClass = "Classe not found";

     try {
      await sut.findClass({nameClass});
     } catch (error) {
      if ( error instanceof CustomError) {
        expect(error?.message).toEqual(new VerifyIfNotClass()?.message);
        expect(error?.statusCode).toEqual(404);
      };
     };
   });

 });