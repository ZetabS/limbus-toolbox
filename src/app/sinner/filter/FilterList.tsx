import React from 'react';
import FilterButton from '@/app/sinner/filter/FilterButton';
import FilterCategory from '@/app/sinner/filter/FilterCategory';
import { SinnerName } from '@/common/typing';

const FilterList: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 bg-red-100 ">
      <FilterCategory category={'sinner'} row={2}>
        <FilterButton
          className="w-32 px-4 py-2"
          render={(category, condition) => (
            <>
              {condition}
            </>
          )}
        />
      </FilterCategory>
      <FilterCategory category={'rarity'}>
        <FilterButton
          className="h-20 w-max p-2"
          render={(category, condition) => (
            <>
            </>
          )}
        />
      </FilterCategory>
    </div>
  );
};

export default FilterList;
