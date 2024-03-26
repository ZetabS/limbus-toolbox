import React from 'react';
import FilterButton from '@/app/sinner/FilterButton';
import FilterCategory from '@/app/sinner/FilterCategory';
import AutoSizeImage from '@/components/AutoSizeImage';

const FilterList: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 bg-red-100 ">
      <FilterCategory
        category={'sinner'}
        row={2}
        button={
          <FilterButton
            className="h-16 w-16 p-1"
            render={(category, condition) => (
              <AutoSizeImage alt={condition} src={`/sinner_icon/${condition}.webp`}></AutoSizeImage>
            )}
          />
        }
      ></FilterCategory>
      <FilterCategory
        category={'rarity'}
        button={
          <FilterButton
            className="h-10 w-20 p-1"
            render={(category, condition) => (
              <>
                <AutoSizeImage
                  alt={condition}
                  src={`/rarity_icon/${condition}.webp`}
                ></AutoSizeImage>
              </>
            )}
          />
        }
      ></FilterCategory>
    </div>
  );
};

export default FilterList;
