import { Request, Response } from "express";
import { UpdateItemUseCase } from "./UseCase";

export class UpdateItemController {
  constructor(private updateItemUseCase: UpdateItemUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.id);
    const { name, price } = request.body;

    try {
      await this.updateItemUseCase.execute({
        id,
        name,
        price,
      });

      return response.status(200).json({ message: "Item updated." });
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
