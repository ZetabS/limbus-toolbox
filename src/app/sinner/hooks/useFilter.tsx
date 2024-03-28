'use client';
import React, { createContext, useContext } from 'react';

export type Category = string;
export type Condition = string;

export interface FilterConfig {
  readonly category: Category;
  readonly conditions: readonly Condition[];
  readonly column?: number;
  readonly imageStyle?: {
    readonly imagePath: (condition: string) => string;
    readonly imageWidth: number;
    readonly imageHeight: number;
  };
}

export interface FilterContextType {
  filterState: FilterState;
  toggleFilter: (category: Category, condition: Condition) => void;
  resetFilter: () => void;
  isActive: (category: Category, condition: Condition) => boolean;
}

export const FilterContext = createContext<FilterContextType>(
  undefined as unknown as FilterContextType
);

export type FilterState = { [category: Category]: Condition[] };

export const FilterProvider: React.FC<{
  filterConfigs: readonly FilterConfig[];
  children: React.ReactNode;
}> = ({ filterConfigs, children }) => {
  const [filterState, setFilterState] = React.useState<FilterState>(
    filterConfigs.reduce((result: FilterState, { category }) => {
      result[category] = [];
      return result;
    }, {} as FilterState)
  );

  const toggleFilter = (category: Category, condition: Condition) => {
    const state: FilterState = { ...filterState };
    const configConditions = filterConfigs.filter((c) => c.category === category)[0].conditions;

    if (!configConditions.includes(condition)) {
      throw Error(`Condition not in ${configConditions}`);
    }

    if (state[category].includes(condition)) {
      state[category] = state[category].filter((c) => c !== condition);
    } else {
      state[category] = [...state[category], condition];
    }
    setFilterState(state);
  };

  const resetFilter = () => {
    setFilterState({});
  };

  const isActive = (category: Category, condition: Condition) => {
    return filterState[category].includes(condition);
  };

  return (
    <FilterContext.Provider value={{ filterState, toggleFilter, resetFilter, isActive }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
