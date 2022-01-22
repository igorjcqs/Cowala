import { Request, Response } from "express";
import { ReadAllItemsUseCase } from "./UseCase";

export class ReadAllItemsController {
  constructor(private readAllItemsUseCase: ReadAllItemsUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const items = await this.readAllItemsUseCase.execute();

      return response.status(201).json({ items: items });
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
