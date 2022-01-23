import { Request, Response } from "express";
import { ReadOneConversionUseCase } from "./UseCase";

export class ReadOneConversionController {
  constructor(private readOneConversionUseCase: ReadOneConversionUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const paramId = request.params.id;
    const id = parseInt(paramId);

    try {
      const conversion = await this.readOneConversionUseCase.execute({
        id,
      });

      return response.status(200).json({ Conversion: conversion });
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
