import { Category, Condition, FilterContext, useFilter } from '@/app/sinner/hooks/useFilter';
import React, { JSX, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { CategoryContext } from '@/app/sinner/hooks/CategoryContext';
import { ConditionContext } from '@/app/sinner/hooks/ConditionContext';
import AutoSizeImage from '@/components/AutoSizeImage';

interface Props {
  readonly condition: Condition;
  readonly imagePath?: (condition: string) => string;
}

const FilterButton: React.FC<Props> = ({ condition, imagePath }) => {
  const { t } = useTranslation();
  const { isActive, toggleFilter } = useFilter();
  const category: Category = useContext(CategoryContext);

  return (
    <button
      key={condition}
      className={
        'btn join-item ' + `${isActive(category, condition) ? 'btn-primary' : 'btn-outline'} `
      }
      onClick={() => toggleFilter(category, condition)}
    >
      {imagePath ? (
        <AutoSizeImage alt={condition} src={imagePath(condition)}></AutoSizeImage>
      ) : (
        t(condition)
      )}
    </button>
  );
};

export default FilterButton;
