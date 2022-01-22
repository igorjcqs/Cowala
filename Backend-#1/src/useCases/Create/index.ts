import { PrismaItemsRepository } from "../../repositories/implementations/PrismaItemsRepository";
import { CreateItemController } from "./Controller";
import { CreateItemUseCase } from "./UseCase";

const prismaItemsRepository = new PrismaItemsRepository();

const createItemUseCase = new CreateItemUseCase(prismaItemsRepository);

const createItemController = new CreateItemController(createItemUseCase);

export { createItemUseCase, createItemController };
