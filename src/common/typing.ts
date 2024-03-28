import {
  ATTACK_TYPE,
  KEYWORD,
  KEYWORD_AFFINITY,
  KEYWORD_OTHER,
  RESISTANCE_LEVEL,
  SIN_AFFINITY,
  SINNER_NAME
} from '@/common/constants';

export type SinnerName = (typeof SINNER_NAME)[number];
export type ResistanceLevel = (typeof RESISTANCE_LEVEL)[number];
export type AttackType = (typeof ATTACK_TYPE)[number];
export type SinAffinity = (typeof SIN_AFFINITY)[number];
export type KeywordAffinity = (typeof KEYWORD_AFFINITY)[number];
export type KeywordOther = (typeof KEYWORD_OTHER)[number];
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
