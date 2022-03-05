import { Party } from "../core/shuffler";

export enum JobTypes {
  DAMAGE_DEALER = 'Damage Dealer',
  BUFFER = 'Buffer',
  HEALER = 'Healer',
  TANK = 'Tank',
  PET = 'Pet',
  MAGE = 'Mage',
  MAGIC_BURSTER = 'Magic Burster'
}

export interface Player {
  name: string;
  jobs: string[];
  jobMap: any;
}

// export interface Job {
//   id: string;
//   tier: number;
//   category: string;
// }

export interface Config {
  slot_1: JobConfig;
  slot_2: JobConfig;
  slot_3: JobConfig;
  slot_4: JobConfig;
  slot_5: JobConfig;
  slot_6: JobConfig;
}

export interface JobConfig {
  jobId: string;
  preferredMinimumRank?: number;
  excluded?: string[];
}
export interface PartyBuilder extends Party {
  // createParty(): void;
  logTeamMatrix(): void
}

export const checkForDuplicates = (array: string[]): void => {
  let hasDuplicates = false;
  array.forEach((item: string, index: number, arr: string[]) => {
    if (arr.slice(index + 1).includes(item)) hasDuplicates = true;
  })
}

export const checkForSingleMemberJobs = (matrix: any) => {

}

