'use client';
import React, { createContext, useContext, useReducer } from 'react';
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

const toggle = (prevState: FilterState, category: Category, condition: Condition) => {
  const state: FilterState = { ...prevState };

  if (![...filterConfigs[category]].includes(condition)) {
    throw Error(`Condition not in ${filterConfigs[category]}`);
  }

  if (state[category].includes(condition)) {
    state[category] = state[category].filter((c) => c !== condition);
  } else {
    state[category] = [...state[category], condition];
  }
  return state;
};

function toggleAll(prevState: FilterState, category: Category) {
  const state: FilterState = { ...prevState };
  state[category] =
    state[category].length === filterConfigs[category].length ? [] : [...filterConfigs[category]];
  return state;
}

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
      return toggle(state, category, condition);
    case 'TOGGLE_ALL':
      if (!category) {
        throw Error(`Type of category is ${typeof category}`);
      }
      return toggleAll(state, category);
    case 'RESET':
      return initialState;
    default:
      throw Error(`Type of actionType is ${typeof actionType}, value is ${actionType}`);
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

export const useFilter = () => {
  const [filterState, dispatch] = useContext(FilterContext);

  const toggleFilter = (category: Category, condition: Condition) => {
    dispatch({ actionType: 'TOGGLE', category, condition });
  };

  const resetFilters = () => {
    dispatch({ actionType: 'RESET' });
  };

  const toggleAllFilters = (category: Category) => {
    dispatch({ actionType: 'TOGGLE_ALL', category });
  };

  const isActive = (category: Category, condition: Condition) => {
    return filterState[category].includes(condition);
  };

  return { filterState, isActive, toggleFilter, resetFilters, toggleAllFilters };
};
