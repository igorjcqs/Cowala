import { Item } from "../../entities/Item";
import { ItemRepository } from "../../repositories/ItemRepository";
import { createItemRequestDTO } from "./DTO";

export class CreateItemUseCase {
  constructor(private itemRepository: ItemRepository) {}
  async execute(data: createItemRequestDTO) {
    const itemVerify = await this.itemRepository.findByName(data.name);

    if (itemVerify) {
      throw new Error("Item already exists.");
    }

    const item = new Item(data);

    await this.itemRepository.create(item);
  }
}
