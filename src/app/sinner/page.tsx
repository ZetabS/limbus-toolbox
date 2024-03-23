'use client';
import MultipleSelectionFilter from '@/app/sinner/MultipleSelectionFilter';
import React, { useEffect, useState } from 'react';
import IdentityCard from '@/app/sinner/IdentityCard';
import { identityList } from '@/app/sinner/Identity';
import { Identity } from '@/common/typing';
import { getValueByPath } from '@/helper/getValueByPath';
import Collapsible from '@/app/sinner/collapsible';
import { SINNER_NAME } from '@/common/constants';

interface FilterConfig {
  category: string;
  conditions: string[];
}

const filterConfigs: FilterConfig[] = [
  { category: 'sinner', conditions: Object.values(SINNER_NAME) },
  { category: 'rarity', conditions: [] },
  { category: 'attackType', conditions: [] },
  { category: 'sinAffinity', conditions: [] },
  { category: 'keyword', conditions: [] },
  { category: 'skill1.attackType', conditions: ['slash', 'pierce', 'blunt'] },
  { category: 'skill2.attackType', conditions: ['slash', 'pierce', 'blunt'] }
];

interface SelectedConditions {
  [key: string]: string[];
}

const Sinner: React.FC = () => {
  const [selectedConditions, setSelectedConditions] = useState<SelectedConditions>(
    filterConfigs.reduce((result: SelectedConditions, filterConfig) => {
      result[filterConfig.category] = [];
      return result;
    }, {})
  );
  const [filteredIdentities, setFilteredIdentities] = useState<Identity[]>([]);

  function handleToggle(category: string, condition: string) {
    setSelectedConditions((prevSelectedConditions) => {
      const updatedConditions = { ...prevSelectedConditions };
      // 해당 카테고리에서 조건이 이미 선택되어 있는지 확인
      if (updatedConditions[category].includes(condition)) {
        // 조건이 이미 선택되어 있다면 제거
        updatedConditions[category] = updatedConditions[category].filter((c) => c !== condition);
      } else {
        // 조건이 선택되어 있지 않다면 추가
        updatedConditions[category] = [...updatedConditions[category], condition];
      }
      return updatedConditions;
    });
  }

  useEffect(() => {
    setFilteredIdentities(
      identityList.filter((identity: Identity) => {
        return Object.entries(selectedConditions).every(([category, conditions]) => {
          return (
            conditions.length === 0 ||
            conditions.some((condition) => {
              return getValueByPath(identity, category) === condition;
            })
          );
        });
      })
    );
  }, [selectedConditions]);

  return (
    <div className="flex h-max w-full flex-col items-center justify-center gap-4 py-4">
      <div className="flex w-full flex-col items-center justify-center gap-4 bg-red-100 ">
        {filterConfigs.map(({ category, conditions }) => (
          <Collapsible
            key={category}
            title={category}
            className="flex w-96 flex-col items-center justify-center bg-cyan-300"
          >
            <MultipleSelectionFilter
              key={category}
              category={category}
              conditions={conditions}
              onToggle={(condition) => handleToggle(category, condition)}
            ></MultipleSelectionFilter>
          </Collapsible>
        ))}
      </div>
      <div className="flex h-max w-full flex-col items-center justify-center bg-yellow-100">
        수감자 목록
        {filteredIdentities.map((identity) => (
          <IdentityCard key={identity.sinner} identity={identity}></IdentityCard>
        ))}
      </div>
    </div>
  );
};

export default Sinner;
