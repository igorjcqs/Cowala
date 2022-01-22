import { Request, Response } from "express";
import { CreateItemUseCase } from "./UseCase";

export class CreateItemController {
  constructor(private createItemUseCase: CreateItemUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, price } = request.body;

    try {
      await this.createItemUseCase.execute({
        name,
        price,
      });

      return response.status(201).json({ message: "Item created." });
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
