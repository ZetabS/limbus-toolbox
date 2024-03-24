import {
  Category,
  CategoryContext,
  Condition,
  ConditionContext,
  FilterContext
} from '@/app/sinner/filter/FilterState';
import React, { JSX, useContext } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  readonly className?: string;
  readonly render?: (category: Category, condition: Condition) => JSX.Element;
}

const FilterButton: React.FC<Props> = ({ className, render }) => {
  const { t } = useTranslation();
  const [filterState, filterDispatch] = useContext(FilterContext);
  const category: Category = useContext(CategoryContext);
  const condition: Condition = useContext(ConditionContext);

  function isActive(condition: Condition) {
    return filterState[category].includes(condition);
  }

  return (
    <button
      key={condition}
      className={
        'flex items-center justify-center text-nowrap ' +
        `${isActive(condition) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} ` +
        `${className ? className : ''}`
      }
      onClick={() => filterDispatch({ actionType: 'TOGGLE', category, condition })}
    >
      {render ? render(category, condition) : t(condition)}
    </button>
  );
};

export default FilterButton;
