export const SINNER_NAME = {
  YISANG: 'yi_sang',
  FAUST: 'faust',
  DONQUIXOTE: 'don_quixote',
  RYOSHU: 'ryoshu',
  MEURSAULT: 'meursault',
  HONGLU: 'hong_lu',
  HEATHCLIFF: 'heathcliff',
  ISHMAEL: 'ishmael',
  RODION: 'rodion',
  SINCLAIR: 'sinclair',
  OUTIS: 'outis',
  GREGOR: 'gregor'
} as const;

export const RESISTANCE_LEVEL = {
  INEFFICIENT: 'inefficient',
  NORMAL: 'normal',
  FATAL: 'fatal'
} as const;

export const ATTACK_TYPE = {
  SLASH: 'slash',
  PIERCE: 'pierce',
  BLUNT: 'blunt'
} as const;

export const SIN_AFFINITY = {
  WRATH: 'wrath',
  LUST: 'lust',
  SLOTH: 'sloth',
  GLUTTONY: 'gluttony',
  GLOOM: 'gloom',
  PRIDE: 'pride',
  ENVY: 'envy'
} as const;

export const KEYWORD_AFFINITY = {
  BURN: 'burn',
  BLEED: 'bleed',
  TREMOR: 'tremor',
  RUPTURE: 'rupture',
  SINKING: 'sinking',
  POISE: 'poise',
  CHARGE: 'charge',
  HASTE: 'haste'
} as const;

export const KEYWORD_OTHER = {
  ATTACK_POWER_UP: 'attack_power_up'
} as const;

export const KEYWORD = {
  ...KEYWORD_AFFINITY,
  ...KEYWORD_OTHER
} as const;
