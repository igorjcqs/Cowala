import { Request, Response } from "express";
import { DeleteConversionUseCase } from "./UseCase";

export class DeleteConversionController {
  constructor(private deleteConversionUseCase: DeleteConversionUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.id);

    try {
      await this.deleteConversionUseCase.execute({
        id,
      });

      return response
        .status(200)
        .json({ message: "Conversion registry deleted." });
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
