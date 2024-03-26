import React from 'react';
import FilterButton from '@/app/sinner/FilterButton';
import FilterCategory from '@/app/sinner/FilterCategory';
import AutoSizeImage from '@/components/AutoSizeImage';

const FilterList: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 bg-red-100 ">
      <FilterCategory category={'sinner'} row={2}>
        <FilterButton
          className="h-20 w-32"
          render={(category, condition) => (
            <>
              <AutoSizeImage alt={condition} src={`/sinner_icon/${condition}.webp`}></AutoSizeImage>
            </>
          )}
        />
      </FilterCategory>
      <FilterCategory category={'rarity'}>
        <FilterButton
          className="h-20 w-40"
          render={(category, condition) => (
            <>
              <AutoSizeImage alt={condition} src={`/rarity_icon/${condition}.webp`}></AutoSizeImage>
            </>
          )}
        />
      </FilterCategory>
    </div>
  );
};

export default FilterList;
