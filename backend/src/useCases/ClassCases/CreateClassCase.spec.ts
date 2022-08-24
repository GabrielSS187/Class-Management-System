import { CreateClassCase } from "./CreateClassCase";

import {
   CreateClassRepositoryInMemory 
} from "../../tests/repositories/Class-repositories/Create-class-repository-in-memory";

import { CustomError } from "../../errors/CustomError";
import { 
  VerifyIfContainRequestValues,
  VerifyIfExistClass,
 } from "../../errors/ClassErrors";

 const sutFactory = () => {
  const createClassRepositoryInMemory = 
  new CreateClassRepositoryInMemory();

  const sut = new CreateClassCase(
    createClassRepositoryInMemory
  );

  return {
    sut,
    createClassRepositoryInMemory,
  };
 };

 describe("Test CreateClassCase.", () => {

  //* Test - 1
  it("should create class without error.", async () => {
    const { 
      sut, 
      createClassRepositoryInMemory 
    } = sutFactory();

    const classList = createClassRepositoryInMemory.classList;

    expect(classList.length).toBe(0);

    const classData = {
      nameClass: "Nome classe teste",
      responsible: "Responsavel classe teste",
    };

    const create = await sut.createClass(classData);

    expect(classList.length).toBeGreaterThan(0);
    expect(classList[0]).toHaveProperty("idClass");
    expect(create).toBe(201);
  });

  //* Test - 2
  it("should throw an error if the properties are missing values.", async () => {
    const { 
      sut, 
      createClassRepositoryInMemory 
    } = sutFactory();

    const classList = createClassRepositoryInMemory.classList;

    const classData = {
      nameClass: "",
      responsible: "Responsavel classe teste",
    };

    try {
      await sut.createClass(classData);
    } catch (error) {
      if ( error instanceof CustomError ) {
        expect(error?.message)
        .toEqual(new VerifyIfContainRequestValues()?.message);
        expect(error?.statusCode).toEqual(406);
      };
    };

    expect(classList.length).toBe(0);
  });

  //* Test - 3
  it("should not be able to create an existing class.", async () => {
    const { 
      sut, 
      createClassRepositoryInMemory 
    } = sutFactory();

    const classList = createClassRepositoryInMemory.classList;

    const classData = {
      nameClass: "Nome classe teste",
      responsible: "Responsavel classe teste",
    };

    await sut.createClass(classData);

    try {
      await sut.createClass(classData);
    } catch (error) {
      if ( error instanceof CustomError ) {
        expect(error?.message).
        toEqual(new VerifyIfExistClass(classData.nameClass)?.message);
        expect(error?.statusCode).toEqual(409);
      };
    };

    expect(classList.length).toBeLessThan(2);
  });

 });