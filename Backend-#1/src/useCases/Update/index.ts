import { PrismaItemsRepository } from "../../repositories/implementations/PrismaItemsRepository";
import { UpdateItemController } from "./Controller";
import { UpdateItemUseCase } from "./UseCase";

const prismaItemsRepository = new PrismaItemsRepository();

const updateItemUseCase = new UpdateItemUseCase(prismaItemsRepository);

const updateItemController = new UpdateItemController(updateItemUseCase);

export { updateItemUseCase, updateItemController };
