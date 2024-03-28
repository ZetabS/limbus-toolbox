import React, { JSX } from 'react';
import '@/i18n/i18n';
import { Category, Condition, filterConfigs } from '@/app/sinner/hooks/useFilter';
import { CategoryContext } from '@/app/sinner/hooks/CategoryContext';
import { FilterButtonList } from '@/app/sinner/FilterButtonList';
import { chunkArray } from '@/helper/chunkSize';

interface Props {
  readonly category: Category;
  readonly column?: number;
  readonly imagePath?: (condition: string) => string;
}

const Filter: React.FC<Props> = ({ category, column, imagePath }) => {
  const conditions: Condition[] = [...filterConfigs[category]];

  return (
    <CategoryContext.Provider value={category}>
      <div className="flex flex-col">
        {column ? (
          chunkArray<Condition>(conditions, column).map((conditions, index) => (
            <FilterButtonList
              key={index}
              conditions={conditions}
              imagePath={imagePath}
            ></FilterButtonList>
          ))
        ) : (
          <FilterButtonList conditions={conditions} imagePath={imagePath}></FilterButtonList>
        )}
      </div>
    </CategoryContext.Provider>
  );
};

export default Filter;
