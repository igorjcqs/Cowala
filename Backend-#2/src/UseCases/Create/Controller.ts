import { Request, Response } from "express";
import axios from "axios";
import { CreateConversionRegistryUseCase } from "./UseCase";

export class CreateConversionRegistryController {
  constructor(
    private createConversionRegistryUseCase: CreateConversionRegistryUseCase
  ) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { convertedCurrency, valueSended } = request.body;
    if (
      JSON.stringify(convertedCurrency).includes("USD") ||
      JSON.stringify(convertedCurrency).includes("USDT") ||
      JSON.stringify(convertedCurrency).includes("CAD") ||
      JSON.stringify(convertedCurrency).includes("GBP") ||
      JSON.stringify(convertedCurrency).includes("ARS") ||
      JSON.stringify(convertedCurrency).includes("BTC") ||
      JSON.stringify(convertedCurrency).includes("LTC") ||
      JSON.stringify(convertedCurrency).includes("EUR") ||
      JSON.stringify(convertedCurrency).includes("JPY") ||
      JSON.stringify(convertedCurrency).includes("CHF") ||
      JSON.stringify(convertedCurrency).includes("AUD") ||
      JSON.stringify(convertedCurrency).includes("CNY") ||
      JSON.stringify(convertedCurrency).includes("ILS") ||
      JSON.stringify(convertedCurrency).includes("ETH") ||
      JSON.stringify(convertedCurrency).includes("XRP") ||
      JSON.stringify(convertedCurrency).includes("DOGE")
    ) {
      const originalCurrency = "BRL";
      const currencyConvertionsName = convertedCurrency + originalCurrency;
      const data = await axios.get(
        `https://economia.awesomeapi.com.br/last/${convertedCurrency}-${originalCurrency}`
      );
      const valueConverted = Number(
        parseFloat(
          JSON.stringify(valueSended / data.data[currencyConvertionsName].bid)
        ).toFixed(2)
      );
      try {
        await this.createConversionRegistryUseCase.execute({
          originalCurrency,
          convertedCurrency,
          valueSended,
          valueConverted,
        });

        return response
          .status(201)
          .json({ message: "Conversion registry created." });
      } catch (error) {
        return response.status(400).json({
          message: error.message || "Unexpected error.",
        });
      }
    } else {
      return response.status(400).json({
        message: "Convertions currency not valid.",
      });
    }
  }
}
