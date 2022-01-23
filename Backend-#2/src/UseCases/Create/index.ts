import { PrismaConversionRepository } from "../../repositories/Implementations/PrismaConversionRegistryRepository";
import { CreateConversionRegistryController } from "./Controller";
import { CreateConversionRegistryUseCase } from "./UseCase";

const prismaConversionRepository = new PrismaConversionRepository();

const createConversionRegistryUseCase = new CreateConversionRegistryUseCase(
  prismaConversionRepository
);

const createConversionRegistryController =
  new CreateConversionRegistryController(createConversionRegistryUseCase);

export { createConversionRegistryUseCase, createConversionRegistryController };
