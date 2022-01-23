import { ConversionRegistry } from "../../entities/conversionRegistry";
import { ConversionRegistryRepository } from "../conversionRegistryRepository";
import { prismaClient } from "../../database/prismaClient";

export class PrismaConversionRepository
  implements ConversionRegistryRepository
{
  async create(conversionRegistry: ConversionRegistry): Promise<any> {
    const newItem = prismaClient.conversionRegistry.create({
      data: {
        originalCurrency: conversionRegistry.originalCurrency,
        convertedCurrency: conversionRegistry.convertedCurrency,
        valueSended: conversionRegistry.valueSended,
        valueConverted: conversionRegistry.valueConverted,
      },
    });
    return newItem;
  }

  async findAll(): Promise<any> {
    const items = await prismaClient.conversionRegistry.findMany();

    return items;
  }

  async findById(id: number): Promise<any> {
    const item = await prismaClient.conversionRegistry.findUnique({
      where: {
        id: id,
      },
    });

    return item;
  }

  async delete(id: number): Promise<any> {
    const deletedConversion = await prismaClient.conversionRegistry.delete({
      where: {
        id: id,
      },
    });

    return deletedConversion;
  }
}
