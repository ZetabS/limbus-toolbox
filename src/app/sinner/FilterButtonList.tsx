import React from 'react';
import FilterButton from '@/app/sinner/FilterButton';
import { Condition } from '@/app/sinner/hooks/useFilter';

interface Props {
  readonly conditions: readonly Condition[];
}

export const FilterButtonList: React.FC<Props> = ({ conditions }) => {
  return (
    <div className="join">
      {conditions.map((condition) => (
        <FilterButton key={condition} condition={condition}></FilterButton>
      ))}
    </div>
  );
};
