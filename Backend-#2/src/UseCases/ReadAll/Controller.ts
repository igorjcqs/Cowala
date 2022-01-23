import { Request, Response } from "express";
import { ReadAllConversionsUseCase } from "./UseCase";

export class ReadAllConversionsController {
  constructor(private readAllConversionsUseCase: ReadAllConversionsUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const conversions = await this.readAllConversionsUseCase.execute();

      return response.status(200).json({ conversions: conversions });
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
