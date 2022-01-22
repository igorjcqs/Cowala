import { Item } from "../../entities/Item";
import { ItemRepository } from "../ItemRepository";
import { prismaClient } from "../../database/prismaClient";

export class PrismaItemsRepository implements ItemRepository {
  async create(item: Item): Promise<any> {
    const newItem = prismaClient.item.create({
      data: {
        name: item.name,
        price: item.price,
      },
    });
    return newItem;
  }

  async findAll(): Promise<any> {
    const items = await prismaClient.item.findMany();

    return items;
  }

  async findByName(name: string): Promise<any> {
    const item = await prismaClient.item.findUnique({
      where: {
        name: name,
      },
    });

    return item;
  }

  async findById(id: number): Promise<any> {
    const item = await prismaClient.item.findUnique({
      where: {
        id: id,
      },
    });

    return item;
  }

  async update(id: number, name: string, price: number): Promise<any> {
    const item = await prismaClient.item.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        price: price,
      },
    });

    return item;
  }

  async delete(id: number): Promise<any> {
    const item = await prismaClient.item.delete({
      where: {
        id: id,
      },
    });

    return item;
  }
}
