import React from 'react';
import '@/i18n/i18n';
import { Category, Condition, filterConfigs } from '@/app/sinner/hooks/useFilter';
import { CategoryContext } from '@/app/sinner/hooks/CategoryContext';
import { ConditionContext } from '@/app/sinner/hooks/ConditionContext';

interface Props {
  readonly category: Category;
  readonly row?: number;
  readonly button: React.ReactNode;
}

const FilterCategory: React.FC<Props> = ({ category, row = 1, button }) => {
  const conditions: Condition[] = [...filterConfigs[category]];
  const conditionsPerRow = Math.ceil(conditions.length / row);

  const conditionRows = [];
  for (let i = 0; i < row; i++) {
    const startIdx = i * conditionsPerRow;
    const endIdx = startIdx + conditionsPerRow;
    conditionRows.push(conditions.slice(startIdx, endIdx));
  }

  return (
    <CategoryContext.Provider value={category}>
      <div className="flex w-max flex-col items-center justify-center gap-0.5 bg-gray-400 p-0.5">
        {conditionRows.map((conditions, index) => (
          <div key={index} className="flex w-max items-center justify-center gap-0.5 bg-gray-400">
            {conditions.map((condition) => (
              <ConditionContext.Provider key={condition} value={condition}>
                {button}
              </ConditionContext.Provider>
            ))}
          </div>
        ))}
      </div>
    </CategoryContext.Provider>
  );
};

export default FilterCategory;
