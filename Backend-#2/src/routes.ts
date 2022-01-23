import { Router } from "express";

import { createConversionRegistryController } from "./UseCases/Create";
import { deleteConversionController } from "./UseCases/Delete";
import { readAllConversionsController } from "./UseCases/ReadAll";
import { readOneConversionController } from "./UseCases/ReadOne";

const router = Router();

router.post("/conversions", (request, response) =>
  createConversionRegistryController.handle(request, response)
);

router.get("/conversions", (request, response) =>
  readAllConversionsController.handle(request, response)
);

router.get("/conversions/:id", (request, response) =>
  readOneConversionController.handle(request, response)
);

router.delete("/conversions/:id", (request, response) =>
  deleteConversionController.handle(request, response)
);

export { router };
