import React, { JSX } from 'react';
import FilterButton from '@/app/sinner/FilterButton';
import { Category, Condition } from '@/app/sinner/hooks/useFilter';

interface Props {
  readonly conditions: Condition[];
  readonly imagePath?: (condition: string) => string;
}

export const FilterButtonList: React.FC<Props> = ({ conditions, imagePath }) => {
  return (
    <div className="join">
      {conditions.map((condition) => (
        <FilterButton key={condition} condition={condition} imagePath={imagePath}></FilterButton>
      ))}
    </div>
  );
};
