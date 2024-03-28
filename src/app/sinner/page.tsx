'use client';
import React from 'react';
import { FilterConfig, FilterProvider } from '@/app/sinner/hooks/useFilter';
import IdentityList from '@/app/sinner/IdentityList';
import Filter from '@/app/sinner/Filter';
import {
  ATTACK_TYPE,
  KEYWORD,
  KEYWORD_AFFINITY,
  SIN_AFFINITY,
  SINNER_NAME
} from '@/common/constants';
import { useTranslation } from 'react-i18next';

const filterConfigs: FilterConfig[] = [
  {
    category: 'sinner',
    conditions: SINNER_NAME,
    column: 6,
    imageStyle: {
      imagePath: (c) => `/image/sinner_icon/${c}.webp`,
      imageHeight: 40,
      imageWidth: 40
    }
  },
  {
    category: 'sinAffinity',
    conditions: SIN_AFFINITY,
    imageStyle: {
      imagePath: (c) => `/image/sin_affinity_icon/${c}.webp`,
      imageHeight: 30,
      imageWidth: 30
    }
  },
  {
    category: 'keyword_affinity',
    conditions: KEYWORD_AFFINITY,
    imageStyle: {
      imagePath: (c) => `/image/keyword_icon/${c}.webp`,
      imageHeight: 30,
      imageWidth: 30
    }
  },
  {
    category: 'rarity',
    conditions: ['1', '2', '3'],
    imageStyle: {
      imagePath: (c) => `/image/rarity_icon/${c}.webp`,
      imageHeight: 40,
      imageWidth: 40
    }
  },
  {
    category: 'attackType',
    conditions: ATTACK_TYPE,
    imageStyle: {
      imagePath: (c) => `/image/attack_type_icon/${c}.webp`,
      imageHeight: 30,
      imageWidth: 30
    }
  },
  {
    category: 'skill1.attackType',
    conditions: ATTACK_TYPE,
    imageStyle: {
      imagePath: (c) => `/image/attack_type_icon/${c}.webp`,
      imageHeight: 30,
      imageWidth: 30
    }
  },
  {
    category: 'skill2.attackType',
    conditions: ATTACK_TYPE,
    imageStyle: {
      imagePath: (c) => `/image/attack_type_icon/${c}.webp`,
      imageHeight: 30,
      imageWidth: 30
    }
  }
] as const;

const Sinner: React.FC = () => {
  const [t] = useTranslation();
  return (
    <FilterProvider filterConfigs={filterConfigs}>
      <div className="flex h-max w-full flex-col items-center justify-center gap-4 py-4">
        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap">
          {filterConfigs.slice(0, 5).map((c) => (
            <Filter key={c.category} config={c}></Filter>
          ))}
        </div>
        <div className="collapse-arrow bg-base-200 collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">{t('text_advanced_options')}</div>
          <div
            className="collapse-content bg-base-100 flex w-full flex-col items-center justify-center gap-4 md:flex-row
              md:flex-wrap"
          >
            {filterConfigs.slice(5).map((c) => (
              <Filter key={c.category} config={c}></Filter>
            ))}
          </div>
        </div>
        <IdentityList></IdentityList>
      </div>
    </FilterProvider>
  );
};

export default Sinner;
