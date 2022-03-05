import { Player } from "../../typeDefinitions/utils";

export const ddJobs = ["DD1", "DD2", "DD3", "DD4"];

export const ddRanks = {
  DD1: 1,
  DD2: 1,
  DD3: 1,
  DD4: 1,
};

export const Oyama: Player = {
  name: "Oyama",
  jobs: [
    "BRD",
    "GEO",
    "RUN",
    "MNK",
    "BLU",
    "DNC",
    "RNG",
    "SAM",
    "WAR",
    "DRG",
    ...ddJobs,
  ],
  jobMap: {
    BRD: 2,
    GEO: 2,
    RUN: 1,
    MNK: 1,
    BLU: 1,
    DNC: 2,
    RNG: 2,
    SAM: 2,
    WAR: 2,
    DRG: 2,
    ...ddRanks,
  },
};

export const Lorileil: Player = {
  name: "Lorileil",
  jobs: [
    "SMN",
    "RUN",
    "WHM",
    "COR",
    "BRD",
    "GEO",
    "RDM",
    "SCH",
    "WAR",
    "THF",
    "RNG",
    "MNK",
    "DRK",
    "SAM",
    "NIN",
    "DRG",
    ...ddJobs,
  ],
  jobMap: {
    SMN: 2,
    RUN: 3,
    WHM: 3,
    COR: 2,
    BRD: 2,
    GEO: 3,
    RDM: 1,
    SCH: 3,
    WAR: 1,
    THF: 1,
    RNG: 2,
    MNK: 3,
    DRK: 2,
    SAM: 3,
    NIN: 3,
    DRG: 3,
    ...ddRanks,
  },
};

export const Sarah: Player = {
  name: "Sarah",
  jobs: [
    "SMN",
    "BST",
    "WHM",
    "COR",
    "GEO",
    "BRD",
    "RDM",
    "SCH",
    "BLM",
    "SAM",
    "DRK",
    "WAR",
    ...ddJobs,
  ],
  jobMap: {
    SMN: 2,
    BST: 3,
    WHM: 1,
    COR: 1,
    GEO: 1,
    BRD: 2,
    RDM: 2,
    SCH: 2,
    BLM: 2,
    SAM: 1,
    DRK: 1,
    WAR: 2,
    ...ddRanks,
  },
};

export const Tiburon: Player = {
  name: "Tiburon",
  jobs: [
    "PUP",
    "RDM",
    "SCH",
    "BLM",
    "WAR",
    "DRK",
    "MNK",
    "THF",
    "SAM",
    "NIN",
    "DRG",
    ...ddJobs,
  ],
  jobMap: {
    PUP: 1,
    PLD: 2,
    RDM: 1,
    SCH: 1,
    BLM: 1,
    GEO: 3,
    DNC: 2,
    WAR: 1,
    DRK: 1,
    MNK: 2,
    THF: 2,
    SAM: 2,
    NIN: 1,
    DRG: 1,
    ...ddRanks,
  },
};

export const Ceokitty: Player = {
  name: "Ceokitty",
  jobs: [
    "WHM",
    "SMN",
    "GEO",
    "BRD",
    "COR",
    "SCH",
    "BLM",
    "PLD",
    "MNK",
    "THF",
    "SAM",
    ...ddJobs,
  ],
  jobMap: {
    WHM: 1,
    SMN: 1,
    GEO: 3,
    BRD: 1,
    COR: 1,
    SCH: 2,
    BLM: 2,
    PLD: 1,
    MNK: 1,
    THF: 2,
    SAM: 1,
    ...ddRanks,
  },
};

export const Oukaai: Player = {
  name: "Oukaai",
  jobs: ["PUP", "GEO", "COR", "RDM", "DRG", "WAR", "THF", "BLU", ...ddJobs],
  jobMap: {
    PUP: 2,
    PLD: 3,
    GEO: 1,
    COR: 1,
    RDM: 1,
    DRG: 1,
    WAR: 1,
    THF: 2,
    BLU: 1,
    ...ddRanks,
  },
};

export const Warria: Player = {
  name: "Warria",
  jobs: ["WAR", "PLD", ...ddJobs],
  jobMap: {
    WAR: 1,
    PLD: 1,
    ...ddRanks,
  },
};

export const Blackstar: Player = {
  name: "Blackstar",
  jobs: [
    "SAM",
    "WAR",
    "MNK",
    "RDM",
    "PLD",
    "SMN",
    "SAM",
    "COR",
    "GEO",
    "RUN",
    ...ddJobs,
  ],
  jobMap: {
    WAR: 1,
    MNK: 1,
    RDM: 1,
    PLD: 1,
    SMN: 2,
    SAM: 1,
    COR: 1,
    GEO: 2,
    RUN: 2,
    ...ddRanks,
  },
};

export const Alkkans: Player = {
  name: "Alkkans",
  jobs: ["SMN", "RUN", "PLD", "BLM", "GEO", "THF", "SAM", "BLU", ...ddJobs],
  jobMap: {
    SMN: 2,
    RUN: 1,
    PLD: 2,
    BLM: 3,
    GEO: 2,
    THF: 1,
    SAM: 1,
    BLU: 2,
    DRK: 3,
    ...ddRanks,
  },
};

export const Kensou: Player = {
  name: "Kensou",
  jobs: ["WAR", "WHM", "RDM", "PLD", "SMN", "DRG", "GEO", ...ddJobs],
  jobMap: {
    WAR: 2,
    WHM: 2,
    RDM: 2,
    PLD: 1,
    SMN: 3,
    DRG: 2,
    GEO: 2,
    ...ddRanks,
  },
};

export const Ceown: Player = {
  name: "Ceown",
  jobs: ["WHM"],
  jobMap: {
    WHM: 2,
  },
};

export const Juhno: Player = {
  name: "Juhno",
  jobs: ["RDM", "PLD", "BRD", "GEO"],
  jobMap: {
    RDM: 1,
    PLD: 3,
    BRD: 3,
    GEO: 2,
  },
};

export const Grogu: Player = {
  name: "Grogu",
  jobs: ["WHM", "RDM", "SCH"],
  jobMap: {
    WHM: 2,
    RDM: 3,
    SCH: 2,
  },
};

export const Knots: Player = {
  name: "Knots",
  jobs: ["WHM", "RDM", "COR", "GEO"],
  jobMap: {
    WHM: 2,
    RDM: 2,
    COR: 2,
    GEO: 2,
  },
};
