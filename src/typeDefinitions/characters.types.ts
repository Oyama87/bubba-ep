import { Player } from "./utils";

export interface CharacterTabProps {
  player: Player,
  role: string;
  assigned: boolean;
  add: Function;
  remove: Function
}