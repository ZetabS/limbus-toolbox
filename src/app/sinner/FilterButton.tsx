import { Category, Condition, FilterContext, useFilter } from '@/app/sinner/hooks/useFilter';
import React, { JSX, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { CategoryContext } from '@/app/sinner/CategoryContext';
import { ConditionContext } from '@/app/sinner/ConditionContext';

interface Props {
  readonly className?: string;
  readonly render?: (category: Category, condition: Condition) => JSX.Element;
}

const FilterButton: React.FC<Props> = ({ className, render }) => {
  const { t } = useTranslation();
  const { isActive, toggleFilter } = useFilter();
  const category: Category = useContext(CategoryContext);
  const condition: Condition = useContext(ConditionContext);

  return (
    <button
      key={condition}
      className={
        'flex items-center justify-center text-nowrap ' +
        `${isActive(category, condition) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} ` +
        `${className ? className : ''}`
      }
      onClick={() => toggleFilter(category, condition)}
    >
      {render ? render(category, condition) : t(condition)}
    </button>
  );
};

export default FilterButton;
