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

  function isAllActive() {
    return filterState[category].length === conditions.length;
  }

  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="flex items-center justify-center">
        <button
          className={`${isAllActive() ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-l-md px-4 py-2`}
          onClick={() => filterDispatch({ actionType: 'TOGGLE_ALL', category })}
        >
          ALL
        </button>
        {conditions.map((condition) => (
          <button
            key={condition}
            className={`${isActive(condition) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} px-4 py-2
            ${condition === conditions[conditions.length - 1] ? 'rounded-r-md' : ''}`}
            onClick={() => filterDispatch({ actionType: 'TOGGLE', category, condition })}
          >
            {t(condition)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MultipleSelectionFilter;
