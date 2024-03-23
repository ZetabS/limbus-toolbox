import {
  ATTACK_TYPE,
  KEYWORD_AFFINITY,
  KEYWORD_OTHER,
  RESISTANCE_LEVEL,
  SIN_AFFINITY,
  SINNER_NAME
} from '@/common/constants';

export type SinnerName = (typeof SINNER_NAME)[keyof typeof SINNER_NAME];
export type ResistanceLevel = (typeof RESISTANCE_LEVEL)[keyof typeof RESISTANCE_LEVEL];
export type AttackType = (typeof ATTACK_TYPE)[keyof typeof ATTACK_TYPE];
export type SinAffinity = (typeof SIN_AFFINITY)[keyof typeof SIN_AFFINITY];
export type KeywordAffinity = (typeof KEYWORD_AFFINITY)[keyof typeof KEYWORD_AFFINITY];
export type KeywordOther = (typeof KEYWORD_OTHER)[keyof typeof KEYWORD_OTHER];
export type Keyword = KeywordAffinity | KeywordOther;

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
  name: string;
  sinner: SinnerName;
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
