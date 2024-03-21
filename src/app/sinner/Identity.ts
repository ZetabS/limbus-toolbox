export type SinnerName =
  | 'yi_sang'
  | 'faust'
  | 'don_quixote'
  | 'ryoshu'
  | 'meursault'
  | 'hong_lu'
  | 'heathcliff'
  | 'ishmael'
  | 'rodion'
  | 'sinclair'
  | 'outis'
  | 'gregor';

export type ResistanceLevel = 'inefficient' | 'normal' | 'fatal';
export type AttackType = 'slash' | 'pierce' | 'blunt';
export type SinAffinity = 'wrath' | 'lust' | 'sloth' | 'gluttony' | 'gloom' | 'pride' | 'envy';
export type Keyword =
  | 'burn'
  | 'bleed'
  | 'tremor'
  | 'rupture'
  | 'sinking'
  | 'poise'
  | 'charge'
  | 'haste'
  | 'attack_power_up';

export interface Skill {
  name: string;
  type: '1' | '2' | '3' | 'defence';
  attackType: AttackType;
  attackLevel: number;
  coin: number;
  basePower: number[];
  coinPower: number[];
  sinAffinity: SinAffinity[];
  attackWeight: number[];
  keyword: Keyword[];
}

export interface Uptie {}

export interface Identity {
  id: number;
  name: SinnerName;
  identityName: string;
  rarity: string;
  affiliation: string;
  season: string;
  maxHP: number;
  resistances: { [key in AttackType]: ResistanceLevel };
  speed: number[][];
  skill1: Skill;
  skill2: Skill;
  skill3: Skill;
  skillDefence: Skill;
  skillExtra: Skill[];
}

export const identityList: Identity[] = [
  {
    id: 0,
    name: 'meursault',
    identityName: 'blade_lineage_mentor',
    rarity: '',
    affiliation: 'blade_lineage',
    season: '',
    maxHP: 0,
    resistances: {
      slash: 'inefficient',
      pierce: 'normal',
      blunt: 'fatal'
    },
    speed: [
      [3, 5],
      [3, 6],
      [4, 6],
      [4, 6]
    ],
    skill1: {
      name: '',
      type: '1',
      attackType: 'slash',
      attackLevel: 3,
      coin: 0,
      basePower: [2, 2, 3, 3],
      coinPower: [4, 4, 4, 4],
      sinAffinity: [],
      attackWeight: [],
      keyword: []
    },
    skill2: {
      name: '',
      type: '2',
      attackType: 'slash',
      attackLevel: 3,
      coin: 0,
      basePower: [],
      coinPower: [],
      sinAffinity: [],
      attackWeight: [],
      keyword: []
    },
    skill3: {
      name: '',
      type: '3',
      attackType: 'slash',
      attackLevel: 3,
      coin: 0,
      basePower: [],
      coinPower: [],
      sinAffinity: [],
      attackWeight: [],
      keyword: []
    },
    skillDefence: {
      name: '',
      type: 'defence',
      attackType: 'slash',
      attackLevel: 3,
      coin: 0,
      basePower: [],
      coinPower: [],
      sinAffinity: [],
      attackWeight: [],
      keyword: []
    },
    skillExtra: []
  }
];
