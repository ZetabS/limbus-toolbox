import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@/i18n/i18n';
import { Category, Condition, FilterContext } from '@/app/sinner/FilterState';

interface Props {
  readonly category: Category;
  readonly conditions: Condition[];
}

const MultipleSelectionFilter: React.FC<Props> = ({ category, conditions }) => {
  const { t } = useTranslation();
  const [filterState, filterDispatch] = useContext(FilterContext);

  function isActive(condition: Condition) {
    return filterState[category].includes(condition);
  }

  const numRows = Math.ceil(conditions.length / 6);
  const conditionsPerRow = Math.ceil(conditions.length / numRows);

  const conditionRows = [];
  for (let i = 0; i < numRows; i++) {
    const startIdx = i * conditionsPerRow;
    const endIdx = startIdx + conditionsPerRow;
    const rowConditions = conditions.slice(startIdx, endIdx);
    conditionRows.push(rowConditions);
  }

  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="flex w-max flex-col flex-wrap items-center justify-center gap-1 bg-gray-400 p-1">
        {conditionRows.map((rowConditions, rowIndex) => (
          <div key={rowIndex} className="flex w-max items-center justify-center gap-1 bg-gray-400">
            {rowConditions.map((condition) => (
              <button
                key={condition}
                className={`${isActive(condition) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} w-32 text-nowrap
                px-4 py-2`}
                onClick={() => filterDispatch({ actionType: 'TOGGLE', category, condition })}
              >
                {t(condition)}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleSelectionFilter;
