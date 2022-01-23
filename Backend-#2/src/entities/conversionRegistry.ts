export class ConversionRegistry {
  public readonly id: number;

  public originalCurrency: string;
  public convertedCurrency: string;
  public valueSended: number;
  public valueConverted: number;

  constructor(props: Omit<ConversionRegistry, "id">, id?: number) {
    Object.assign(this, props);
  }
}
