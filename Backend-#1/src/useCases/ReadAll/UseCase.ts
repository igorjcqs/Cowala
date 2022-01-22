import { ItemRepository } from "../../repositories/ItemRepository";

export class ReadAllItemsUseCase {
  constructor(private itemRepository: ItemRepository) {}
  async execute() {
    const items = await this.itemRepository.findAll();

    return items;
  }
}
