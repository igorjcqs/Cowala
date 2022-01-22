import { ItemRepository } from "../../repositories/ItemRepository";
import { readOneItemRequestDTO } from "./DTO";

export class ReadOneItemUseCase {
  constructor(private itemRepository: ItemRepository) {}
  async execute(data: readOneItemRequestDTO) {
    const item = await this.itemRepository.findById(data.id);

    return item;
  }
}
