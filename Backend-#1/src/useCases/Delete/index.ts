import { PrismaItemsRepository } from "../../repositories/implementations/PrismaItemsRepository";
import { DeleteItemController } from "./Controller";
import { DeleteItemUseCase } from "./UseCase";

const prismaItemsRepository = new PrismaItemsRepository();

const deleteItemUseCase = new DeleteItemUseCase(prismaItemsRepository);

const deleteItemController = new DeleteItemController(deleteItemUseCase);

export { deleteItemUseCase, deleteItemController };
