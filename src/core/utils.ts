import { Party } from "./shuffler";

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
  slot_1: string;
  slot_2: string;
  slot_3: string;
  slot_4: string;
  slot_5: string;
  slot_6: string;
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

export const Oyama: Player = {
  name: 'Oyama',
  jobs: [
    'BRD',
    'GEO',
    'RUN',
    'MNK',
    'BLU',
    'DNC',
    'RNG',
    'SAM',
    'WAR',
    'DRG',

  ],
  jobMap: {
    'BRD': 2,
    'GEO': 2,
    'RUN': 1,
    'MNK': 1,
    'BLU': 1,
    'DNC': 2,
    'RNG': 2,
    'SAM': 2,
    'WAR': 2,
    'DRG': 2,
  }
};

export const Lorileil: Player = {
  name: 'Lorileil',
  jobs: [
    'SMN',
    'RUN',
    'WHM',
    'COR',
    'BRD',
    'GEO',
    'RDM',
    'SCH',
    'WAR',
    'THF',
    'RNG',
    'MNK',
    'DRK',
    'SAM',
    'NIN',
    'DRG',
  ],
  jobMap: {
    'SMN': 2,
    'RUN': 3,
    'WHM': 3,
    'COR': 2,
    'BRD': 2,
    'GEO': 3,
    'RDM': 1,
    'SCH': 3,
    'WAR': 1,
    'THF': 1,
    'RNG': 2,
    'MNK': 3,
    'DRK': 2,
    'SAM': 3,
    'NIN': 3,
    'DRG': 3,
  }
}

export const Sarah: Player = {
  name: 'Sarah',
  jobs: [
    'SMN',
    'BST',
    'WHM',
    'COR',
    'GEO',
    'BRD',
    'RDM',
    'SCH',
    'BLM',
    'SAM',
    'DRK',
    'WAR',
  ],
  jobMap: {
    'SMN': 2,
    'BST': 3,
    'WHM': 1,
    'COR': 1,
    'GEO': 1,
    'BRD': 2,
    'RDM': 2,
    'SCH': 2,
    'BLM': 2,
    'SAM': 1,
    'DRK': 1,
    'WAR': 2,
  }
};

export const Tiburon: Player = {
  name: 'Tiburon',
  jobs: [
    'PUP',
    'RDM',
    'SCH',
    'BLM',
    'WAR',
    'DRK',
    'MNK',
    'THF',
    'SAM',
    'NIN',
    'DRG',
  ],
  jobMap: {
    'PUP': 1,
    'PLD': 2,
    'RDM': 1,
    'SCH': 1,
    'BLM': 1,
    'GEO': 3,
    'DNC': 2,
    'WAR': 1,
    'DRK': 1,
    'MNK': 2,
    'THF': 2,
    'SAM': 2,
    'NIN': 1,
    'DRG': 1,
  }
};

export const Ceokitty: Player = {
  name: 'Ceokitty',
  jobs: [
    'WHM',
    'SMN',
    'GEO',
    'BRD',
    'COR',
    'SCH',
    'BLM',
    'PLD',
    'MNK',
    'THF',
    'SAM',
  ],
  jobMap: {
    'WHM': 1,
    'SMN': 1,
    'GEO': 3,
    'BRD': 1,
    'COR': 1,
    'SCH': 2,
    'BLM': 2,
    'PLD': 1,
    'MNK': 1,
    'THF': 2,
    'SAM': 1,
  }
}

export const Oukaai: Player = {
  name: 'Oukaai',
  jobs: [
    'PUP',
    'GEO',
    'COR',
    'RDM',
    'DRG',
    'WAR',
    'THF',
    'BLU',
  ],
  jobMap: {
    'PUP': 2,
    'PLD': 3,
    'GEO': 1,
    'COR': 1,
    'RDM': 1,
    'DRG': 1,
    'WAR': 1,
    'THF': 2,
    'BLU': 1,
  }
};

export const Warria: Player = {
  name: 'Warria',
  jobs: [
    'WAR',
    'PLD',
  ],
  jobMap: {
    'WAR': 1,
    'PLD': 1,
  }
};

export const Blackstar: Player = {
  name: 'Blackstar',
  jobs: [
    'SAM',
    'WAR',
    'MNK',
    'RDM',
    'PLD',
    'SMN',
    'SAM',
    'COR',
    'GEO',
    'RUN'
  ],
  jobMap: {
    'WAR': 1,
    'MNK': 1,
    'RDM': 1,
    'PLD': 1,
    'SMN': 2,
    'SAM': 1,
    'COR': 1,
    'GEO': 2,
    'RUN': 2,
  }
};

export const Alkkans = {
  name: 'Alkkans',
  jobs: [
    'SMN',
    'RUN',
    'PLD',
    'BLM',
    'GEO',
    'THF',
    'SAM',
    'BLU'
  ],
  jobMap: {
    'SMN': 2,
    'RUN': 1,
    'PLD': 2,
    'BLM': 3,
    'GEO': 2,
    'THF': 1,
    'SAM': 1,
    'BLU': 2,
    'DRK': 3
  }
}
