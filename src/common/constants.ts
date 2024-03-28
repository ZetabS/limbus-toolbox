export const SINNER_NAME = [
  'yi_sang',
  'faust',
  'don_quixote',
  'ryoshu',
  'meursault',
  'hong_lu',
  'heathcliff',
  'ishmael',
  'rodion',
  'sinclair',
  'outis',
  'gregor'
] as const;

export const RESISTANCE_LEVEL = ['inefficient', 'normal', 'fatal'] as const;

export const ATTACK_TYPE = ['slash', 'pierce', 'blunt'] as const;

export const SIN_AFFINITY = [
  'wrath',
  'lust',
  'sloth',
  'gluttony',
  'gloom',
  'pride',
  'envy'
] as const;

export const KEYWORD_AFFINITY = [
  'burn',
  'bleed',
  'tremor',
  'rupture',
  'sinking',
  'poise',
  'charge',
  'haste'
] as const;

export const KEYWORD = [...KEYWORD_AFFINITY, 'attack_power_up'] as const;
