import { PrismaConversionRepository } from "../../repositories/Implementations/PrismaConversionRegistryRepository";
import { ReadOneConversionController } from "./Controller";
import { ReadOneConversionUseCase } from "./UseCase";

const prismaConversionRepository = new PrismaConversionRepository();

const readOneConversionUseCase = new ReadOneConversionUseCase(
  prismaConversionRepository
);

const readOneConversionController = new ReadOneConversionController(
  readOneConversionUseCase
);

export { readOneConversionUseCase, readOneConversionController };
