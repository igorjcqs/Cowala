import { Request, Response } from "express";
import { DeleteItemUseCase } from "./UseCase";

export class DeleteItemController {
  constructor(private deleteItemUseCase: DeleteItemUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.id);

    try {
      await this.deleteItemUseCase.execute({
        id,
      });

      return response.status(200).json({ message: "Item deleted." });
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
