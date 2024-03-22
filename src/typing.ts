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
