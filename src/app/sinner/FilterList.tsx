import React from 'react';
import FilterButton from '@/app/sinner/FilterButton';
import FilterCategory from '@/app/sinner/FilterCategory';
import { SinnerName } from '@/common/typing';
import SinnerIcon from '@/components/image/SinnerIcon';
import RarityIcon from '@/components/image/RarityIcon';

const FilterList: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 bg-red-100 ">
      <FilterCategory category={'sinner'} row={2}>
        <FilterButton
          className="w-32 px-4 py-2"
          render={(category, condition) => (
            <>
              {condition}
              <SinnerIcon sinner={condition as SinnerName}></SinnerIcon>
            </>
          )}
        />
      </FilterCategory>
      <FilterCategory category={'rarity'}>
        <FilterButton
          className="h-20 w-max p-2"
          render={(category, condition) => (
            <>
              <RarityIcon rarity={condition}></RarityIcon>
            </>
          )}
        />
      </FilterCategory>
    </div>
  );
};

export default FilterList;
