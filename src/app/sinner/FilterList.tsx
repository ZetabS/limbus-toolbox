import { Category, Condition, filterConfigs } from '@/app/sinner/FilterState';
import MultipleSelectionFilter from '@/app/sinner/MultipleSelectionFilter';
import React from 'react';

const FilterList: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 bg-red-100 ">
      {Object.entries(filterConfigs).map(([category, conditions]) => (
        <MultipleSelectionFilter
          key={category}
          category={category as Category}
          conditions={conditions as Condition[]}
        ></MultipleSelectionFilter>
      ))}
    </div>
  );
};

export default FilterList;
