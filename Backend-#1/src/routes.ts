import { Router } from "express";

import { createItemController } from "./useCases/Create";
import { readAllItemsController } from "./useCases/ReadAll";
import { readOneItemController } from "./useCases/ReadOne";
import { updateItemController } from "./useCases/Update";
import { deleteItemController } from "./useCases/Delete";

const router = Router();

router.post("/items", (request, response) => {
  return createItemController.handle(request, response);
});

router.get("/items", (request, response) => {
  return readAllItemsController.handle(request, response);
});

router.get("/items/:id", (request, response) => {
  return readOneItemController.handle(request, response);
});

router.put("/items/:id", (request, response) => {
  return updateItemController.handle(request, response);
});

router.delete("/items/:id", (request, response) => {
  return deleteItemController.handle(request, response);
});

export { router };
