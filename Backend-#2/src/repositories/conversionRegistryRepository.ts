import { ConversionRegistry } from "../entities/conversionRegistry";

export interface ConversionRegistryRepository {
  create(ConversionRegistry: ConversionRegistry): Promise<ConversionRegistry>;
  findAll(): Promise<any>;
  findById(id: number): Promise<ConversionRegistry>;
  delete(id: number): Promise<any>;
}
