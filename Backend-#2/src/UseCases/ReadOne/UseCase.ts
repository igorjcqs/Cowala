import { ConversionRegistryRepository } from "../../repositories/conversionRegistryRepository";
import { readOneConversionRequestDTO } from "./DTO";

export class ReadOneConversionUseCase {
  constructor(
    private conversionRegistryRepository: ConversionRegistryRepository
  ) {}
  async execute(data: readOneConversionRequestDTO) {
    const Conversion = await this.conversionRegistryRepository.findById(
      data.id
    );

    return Conversion;
  }
}
