import React, { useContext } from 'react';
import { Condition, FilterConfig, useFilter } from '@/app/sinner/hooks/useFilter';
import { useTranslation } from 'react-i18next';
import { ConfigContext } from '@/app/sinner/hooks/ConfigContext';
import Image from 'next/image';

interface Props {
  readonly condition: Condition;
}

const FilterButton: React.FC<Props> = ({ condition }) => {
  const { t } = useTranslation();
  const { isActive, toggleFilter } = useFilter();
  const config: FilterConfig = useContext(ConfigContext);

  return (
    <div className="flex flex-col items-center text-xs">
      <button
        key={condition}
        className={
          'btn join-item ' +
          `${isActive(config.category, condition) ? 'btn-primary' : 'btn-outline'} `
        }
        onClick={() => toggleFilter(config.category, condition)}
      >
        {config.imageStyle ? (
          <Image
            width={config.imageStyle.imageWidth}
            height={config.imageStyle.imageHeight}
            src={config.imageStyle.imagePath(condition)}
            alt={condition}
          ></Image>
        ) : (
          t(condition)
        )}
      </button>
      {t(condition)}
    </div>
  );
};

export default FilterButton;
