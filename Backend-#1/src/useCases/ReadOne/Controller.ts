import { Request, Response } from "express";
import { ReadOneItemUseCase } from "./UseCase";

export class ReadOneItemController {
  constructor(private readOneItemUseCase: ReadOneItemUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const paramId = request.params.id;
    const id = parseInt(paramId);

    try {
      const item = await this.readOneItemUseCase.execute({
        id,
      });

      return response.status(201).json({ item: item });
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
