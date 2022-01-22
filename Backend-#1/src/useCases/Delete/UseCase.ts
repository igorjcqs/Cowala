import { ItemRepository } from "../../repositories/ItemRepository";
import { deleteItemRequestDTO } from "./DTO";

export class DeleteItemUseCase {
  constructor(private itemRepository: ItemRepository) {}
  async execute(data: deleteItemRequestDTO) {
    this.itemRepository.delete(data.id);
  }
}
