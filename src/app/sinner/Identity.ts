import { Identity } from '@/typing';

export const identityList: Identity[] = [
  {
    id: 0,
    name: 'meursault',
    identityName: 'blade_lineage_mentor',
    rarity: '3',
    affiliation: 'blade_lineage',
    season: '',
    maxHP: 191,
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
    skillExtra: [
      {
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
      }
    ]
  }
];
