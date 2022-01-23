import { PrismaConversionRepository } from "../../repositories/Implementations/PrismaConversionRegistryRepository";
import { DeleteConversionController } from "./Controller";
import { DeleteConversionUseCase } from "./UseCase";

const prismaConversionRepository = new PrismaConversionRepository();

const deleteConversionUseCase = new DeleteConversionUseCase(
  prismaConversionRepository
);

const deleteConversionController = new DeleteConversionController(
  deleteConversionUseCase
);

export { deleteConversionUseCase, deleteConversionController };
