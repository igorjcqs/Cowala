import { PrismaConversionRepository } from "../../repositories/Implementations/PrismaConversionRegistryRepository";
import { ReadAllConversionsController } from "./Controller";
import { ReadAllConversionsUseCase } from "./UseCase";

const prismaConversionRepository = new PrismaConversionRepository();

const readAllConversionsUseCase = new ReadAllConversionsUseCase(
  prismaConversionRepository
);

const readAllConversionsController = new ReadAllConversionsController(
  readAllConversionsUseCase
);

export { readAllConversionsUseCase, readAllConversionsController };
