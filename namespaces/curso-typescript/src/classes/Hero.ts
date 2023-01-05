import powers from "../data/index";

export class Hero {
  constructor(
    public powerId: number,
    public name: string,
    public age: number
  ) {}

  get power():string {
    return (
      powers.find((power) => power.id === this.powerId)?.desc || "not found"
    );
  }
}
