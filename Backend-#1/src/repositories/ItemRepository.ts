import { Item } from "../entities/Item";

export interface ItemRepository {
  create(item: Item): Promise<any>;
  findAll(): Promise<any>;
  findByName(name: string): Promise<any>;
  findById(id: number): Promise<any>;
  update(id: number, name: string, price: number): Promise<any>;
  delete(id: number): Promise<any>;
}
