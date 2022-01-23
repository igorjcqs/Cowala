import { ConversionRegistryRepository } from "../../repositories/conversionRegistryRepository";

export class ReadAllConversionsUseCase {
  constructor(
    private conversionRegistryRepository: ConversionRegistryRepository
  ) {}
  async execute() {
    const conversions = await this.conversionRegistryRepository.findAll();

    return conversions;
  }
}
