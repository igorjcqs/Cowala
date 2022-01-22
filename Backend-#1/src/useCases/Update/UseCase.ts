import { ItemRepository } from "../../repositories/ItemRepository";
import { updateItemRequestDTO } from "./DTO";

export class UpdateItemUseCase {
  constructor(private itemRepository: ItemRepository) {}
  async execute(data: updateItemRequestDTO) {
    this.itemRepository.update(data.id, data.name, data.price);
  }
}
