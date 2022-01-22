import { PrismaItemsRepository } from "../../repositories/implementations/PrismaItemsRepository";
import { ReadOneItemController } from "./Controller";
import { ReadOneItemUseCase } from "./UseCase";

const prismaItemsRepository = new PrismaItemsRepository();

const readOneItemUseCase = new ReadOneItemUseCase(prismaItemsRepository);

const readOneItemController = new ReadOneItemController(readOneItemUseCase);

export { readOneItemUseCase, readOneItemController };
