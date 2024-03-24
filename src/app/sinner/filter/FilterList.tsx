import React from 'react';
import FilterButton from '@/app/sinner/filter/FilterButton';
import FilterCategory from '@/app/sinner/filter/FilterCategory';

const FilterList: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 bg-red-100 ">
      <FilterCategory category={'sinner'} row={2}>
        <FilterButton className="w-32 px-4 py-2"></FilterButton>
      </FilterCategory>
      <FilterCategory category={'rarity'}>
        <FilterButton className="w-32 px-4 py-2"></FilterButton>
      </FilterCategory>
    </div>
  );
};

export default FilterList;
