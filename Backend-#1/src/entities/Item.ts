export class Item {
  public readonly id: number;

  public name: string;
  public price: number;

  constructor(props: Omit<Item, "id">, id?: number) {
    Object.assign(this, props);
  }
}
