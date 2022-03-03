import { PartyBuilder, Player, Config, Oyama, Lorileil, Sarah, Tiburon, Ceokitty, Oukaai, Warria, Blackstar, Alkkans } from "./utils";
const getJobs = (member: Player, index: number, members: Player[]): string[] => {
  const player: Player | undefined = members.find((p: Player) => {
    return p.name === member.name
  })
  if (player !== undefined) {
    return player.jobs.map((jb: string) => jb)
  } else {
    return []
  }
}

export class Party implements PartyBuilder {
  // Permanent Resources
  private partyLength: number;
  private PartyMembers: Player[];
  private partyConfig: string[];
  private matrixMemo: any = {};

  // Temp Resources
  private membersAvailable: Player[];
  private jobsNeeded: string[];
  private jobsAvailable: Set<string>;
  private teamMatrix: any = {};
  private outputParty: any = { rank: 0 };
  private validParties: any[] = [];

  constructor(players: Player[], config: any) {
    // Set Permanent Resources
    this.partyConfig = Object.keys(config).map(val => config[val])
    this.partyLength = this.partyConfig.length;
    this.PartyMembers = players.map((p: Player) => {
      p.jobs = p.jobs.filter((job: string) => this.partyConfig.includes(job))
      return { ...p }
    });
    for (let i = 0; i < this.partyLength; i++) {
      this.matrixMemo[this.partyConfig[i]] = this.PartyMembers.filter(
        player => player.jobs
          .includes(this.partyConfig[i]))
        .map((player: Player) => player.name)
    }
    console.log('Matrix Memo:', this.matrixMemo);

    // Set Temp Resources
    this.jobsNeeded = [...this.partyConfig];
    this.membersAvailable = [...this.PartyMembers]
    const jbs = this.PartyMembers.map(getJobs).reduce((prev, current) => {
      return [...prev, ...current]
    })
    this.jobsAvailable = new Set<string>(jbs);
    this.teamMatrix = { ...this.matrixMemo }
    // console.log('Base Party Members:', this.PartyMembers)
  }

  private assign(member: Player, job: string): boolean {
    // console.log('\nAssigning', member, 'to', job);
    const assignmentIsValid: boolean = this.updateBench(member.name, job);
    debugger;
    if (assignmentIsValid) {
      const rank = this.outputParty.rank + member.jobMap[job];
      this.outputParty = {
        ...this.outputParty,
        [job]: member ? member.name : '',
        rank
      }
      // console.log('Output Party:', this.outputParty)
      return true;
    } else return false
  }

  private updateBench(memberName: string, jobName: string): boolean {
    let tempMembersAvailable: Player[] = this.PartyMembers.filter(p => p.name !== memberName);
    let tempJobsNeeded: string[] = this.jobsNeeded.filter(job => job !== jobName).sort();
    let singleJobs: string[] = [];
    let valid: boolean = true;
    let matrixJobs: string[] = Object.keys(this.teamMatrix);

    let tempJobsAvailable = tempMembersAvailable.map(getJobs)
      .reduce((prev, current) => {
        return [...prev, ...current]
      }, [])

    const assignmentIsValid: boolean = tempJobsNeeded.reduce((prev: boolean, current: string) => {
      return prev ? this.jobsAvailable.has(current) : false;
    }, true);

    if (assignmentIsValid) {
      this.membersAvailable = tempMembersAvailable
      this.jobsAvailable = new Set<string>(tempJobsAvailable);
      this.jobsNeeded = tempJobsNeeded;
      this.teamMatrix = matrixJobs.reduce((prev: any, current: string) => {
        return {
          ...prev,
          [current]: this.teamMatrix[current].filter((playerName: string) => playerName !== memberName)
        }
      }, {})
      delete this.teamMatrix[jobName]
    }
    matrixJobs.forEach((job: string) => {
      if (this.teamMatrix[job] && this.teamMatrix[job].length === 1) {
        if (singleJobs.includes(this.teamMatrix[job][0])) valid = false;
        else singleJobs = [...singleJobs, ...this.teamMatrix[job]]
      }
    })
    return assignmentIsValid && valid
  }

  private findNextJob(): string {
    let jobs: string[] = Object.keys(this.teamMatrix);
    const done = jobs.length === 0;
    if (done) return 'DONE';
    else {
      // Check for validity of being able to assign someone (i.e. Two jobs which both have only the same member available)
      const nextJob: string = jobs.reduce((prev: string, current: string) => {
        return this.teamMatrix[prev].length < this.teamMatrix[current].length ? prev : current;
      });
      return nextJob;
    }
  }

  public findValidPartySetups(defaultAssignments?: [Player, string][]): void {
    // Whiteboard it out and test incrementally.

    // Looping over Players: 
    // Each player loops over each of his jobs, assigning himself and attempting a party creation.
    // If the output party has less than 6 defined values, not a valid party.
    // Look for rank first to pre-optimize for top-tier jobs.
    // Filter by tier === 1, and see if you can make a party with all tier-1s first.
    // If not (even if so, but use finally(?)), filter in the tier-2s and repeat.
    // Finally, the t3s, but only if nothing produces a party from the 1s and 2s.
    let defaults: any = []
    if (defaultAssignments) {
      defaultAssignments.forEach((pair: [Player, string]) => {
        this.assign(pair[0], pair[1]);
        defaults.push(pair[0].name)
      })
    }
    console.log('Defaults:', defaults);
    this.PartyMembers.filter((p: Player) => !(defaults.includes(p.name))).forEach((player: Player, i: number, arr: Player[]) => {
      player.jobs.forEach((job: string) => {
        if (defaultAssignments) {
          defaultAssignments.forEach((pair: [Player, string]) => {
            this.assign(pair[0], pair[1]);
          })
        }
        this.assign(player, job);
        // Before creating party, check the players/matrix for single job and single member cases.
        // Assign as necessary until no cases, then run create party.
        // But check a memo object first to determine if the party makeup from individual assignments (pre-createParty) already exist.
        // If it already exists, we have already run create party on it and don't need to again.
        this.createParty();

        const validParty: boolean = Object.keys(this.outputParty).filter((job: string) => this.outputParty[job] !== undefined).length === this.partyLength + 1;
        if (validParty) {
          this.outputParty = Object.keys(this.outputParty)
            .sort()
            .reduce((prev, current) => {
              return { ...prev, [current]: this.outputParty[current] }
            }, {});
          let isUnique: boolean = this.validParties.filter(
            (party: any) => JSON.stringify(party) === JSON.stringify(this.outputParty)
          ).length === 0;
          if (isUnique) {
            this.validParties = [...this.validParties, this.outputParty]
          }
        }
        this.teamMatrix = this.matrixMemo;
        this.outputParty = { rank: 0 };
        this.jobsNeeded = this.partyConfig;
        this.membersAvailable = this.PartyMembers;
        const jbs = this.PartyMembers.map(getJobs).reduce((prev, current) => {
          return [...prev, ...current]
        })
        this.jobsAvailable = new Set<string>(jbs);
      })
    })
    console.log('Number Of Parties:', this.validParties.length);
    console.log(
      'Best Parties:', this.validParties.sort((a: any, b: any) => a.rank - b.rank).slice(0, 3)
    );
    // console.log('DONE', this.validParties.length);
  }


  private createParty(): void {
    let nextJobToAssign = this.findNextJob();
    while (nextJobToAssign !== 'DONE') {
      const player: Player = this.membersAvailable.filter((p: Player) => {
        // console.log('Player:', p.name)
        return p.name === this.teamMatrix[nextJobToAssign][0]
      })[0]
      if (player && this.assign(player, nextJobToAssign)) nextJobToAssign = this.findNextJob();
      else nextJobToAssign = 'DONE'
    }
    // console.log('Ouput Party:', this.outputParty);
    // console.log('\nDONE');
  }

  public logTeamMatrix(): void {
    console.log(
      'Initial Resources:\nParty Members:',
      this.membersAvailable,
      '\nJobs:',
      this.jobsNeeded,
      '\nParty Matrix:',
      this.teamMatrix,
      '\nCurrent Party Setup:',
      this.outputParty)
  }
}





// Players' names and list of jobs under consideration
export const players: Player[] = [
  Oyama,
  Oukaai,
  Sarah,
  Ceokitty,
  Tiburon,
  Blackstar,
  Lorileil,
  Warria,
  Alkkans
]

// Look at Available Party Members as well as Matrix as you move people into and out of jobs.
// E.g. At each iteration, are there any jobs with only one person, AND are there any people with only one job.
// Assign as necessary and when you no longer have either of the above, start iterating the multiple-party creation algorithm


// Desired string Setup of the Party
const config: Config = {
  slot_1: 'SAM',
  slot_2: 'WAR',
  slot_3: 'WHM',
  slot_4: 'COR',
  slot_5: 'BRD',
  slot_6: 'GEO'
}

// Assign the players to jobs and log the party setup to the console
// const newParty: Party = new Party(players, config);
// newParty.findValidPartySetupsWithDefaults([]);
// newParty.findValidPartySetups();
