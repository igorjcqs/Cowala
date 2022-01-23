import { ConversionRegistry } from "../../entities/conversionRegistry";
import { ConversionRegistryRepository } from "../../repositories/conversionRegistryRepository";
import { createConversionRegistryRequestDTO } from "./DTO";

export class CreateConversionRegistryUseCase {
  constructor(
    private conversionRegistryRepository: ConversionRegistryRepository
  ) {}
  async execute(data: createConversionRegistryRequestDTO) {
    const conversionRegistry = new ConversionRegistry(data);

    await this.conversionRegistryRepository.create(conversionRegistry);
  }
}
