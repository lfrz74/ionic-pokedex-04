import { Stat } from "./stat";

export class Pokemon {
  id: number | undefined;
  name: string | undefined;
  type1: string | undefined;
  type2?: string;
  sprite: string | undefined;
  height: number | undefined;
  weight: number | undefined;
  abilities: string[] | undefined;
  hiddenAbility: string | undefined;
  stats: Stat[] | undefined;
}
