import { ConversionRegistryRepository } from "../../repositories/conversionRegistryRepository";
import { deleteConversionRequestDTO } from "./DTO";

export class DeleteConversionUseCase {
  constructor(
    private conversionRegistryRepository: ConversionRegistryRepository
  ) {}
  async execute(data: deleteConversionRequestDTO) {
    this.conversionRegistryRepository.delete(data.id);
  }
}
