import React, { createContext, useReducer } from 'react';
import { ATTACK_TYPE, KEYWORD, SIN_AFFINITY, SINNER_NAME } from '@/common/constants';

export const filterConfigs = {
  'sinner': Object.values(SINNER_NAME),
  'rarity': ['1', '2', '3'],
  'attackType': Object.values(ATTACK_TYPE),
  'sinAffinity': Object.values(SIN_AFFINITY),
  'keyword': Object.values(KEYWORD),
  'skill1.attackType': Object.values(ATTACK_TYPE),
  'skill2.attackType': Object.values(ATTACK_TYPE)
} as const;

export type FilterState = { [category in Category]: Condition[] };
export type FilterConfig = typeof filterConfigs;
export type Category = keyof FilterConfig;
export type Condition = FilterConfig[Category][number];

const initialState: FilterState = Object.keys(filterConfigs).reduce(
  (result: FilterState, category) => {
    result[category as Category] = [];
    return result;
  },
  {} as FilterState
);

type Action = {
  actionType: 'TOGGLE' | 'RESET' | 'TOGGLE_ALL';
  category?: Category;
  condition?: Condition;
};

const reducer = (state: FilterState, action: Action): FilterState => {
  const { actionType, category, condition } = action;

  switch (actionType) {
    case 'TOGGLE':
      if (!category) {
        throw Error(`Type of category is ${typeof category}`);
      }

      if (!condition) {
        throw Error(`Type of condition is ${typeof condition}`);
      }

      if (state[category].includes(condition)) {
        state[category] = state[category].filter((c) => c !== condition);
      } else {
        state[category] = [...state[category], condition];
      }
      return state;
    case 'TOGGLE_ALL':
      if (!category) {
        throw Error(`Type of category is ${typeof category}`);
      }

      state[category] =
        state[category].length === filterConfigs[category].length
          ? []
          : [...filterConfigs[category]];
      return state;
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export const FilterContext = createContext<[FilterState, React.Dispatch<Action>]>([
  initialState,
  () => null
]);

interface Props {
  children: React.ReactNode;
}

export const FilterProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <FilterContext.Provider value={[state, dispatch]}>{children}</FilterContext.Provider>;
};
