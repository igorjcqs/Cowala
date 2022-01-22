import { PrismaItemsRepository } from "../../repositories/implementations/PrismaItemsRepository";
import { ReadAllItemsController } from "./Controller";
import { ReadAllItemsUseCase } from "./UseCase";

const prismaItemsRepository = new PrismaItemsRepository();

const readAllItemsUseCase = new ReadAllItemsUseCase(prismaItemsRepository);

const readAllItemsController = new ReadAllItemsController(readAllItemsUseCase);

export { readAllItemsUseCase, readAllItemsController };
