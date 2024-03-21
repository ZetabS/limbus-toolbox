'use client';
import MultipleSelectionFilter from '@/app/sinner/MultipleSelectionFilter';
import React, { useState } from 'react';
import IdentityCard from '@/app/sinner/IdentityCard';
import { Identity, identityList } from '@/app/sinner/Identity';

interface FilterInformation {
  name: string;
  initialFilters: string[];
}

const Sinner: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [filteredIdentities, setFilteredIdentities] = useState<Identity[]>([]);

  const filterInformation: FilterInformation[] = [
    { name: '공격 유형', initialFilters: ['slash', 'pierce', 'blunt'] }
  ];

  function handleToggleFilter(filter: string) {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f) => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  }

  React.useEffect(() => {
    setFilteredIdentities(
      identityList.filter((identity: Identity) => {
        return selectedFilters.some((condition) => {
          return identity.skill1.attackType === condition;
        });
      })
    );
  }, [selectedFilters]);

  return (
    <div className="flex h-max w-full flex-col items-center justify-center gap-4 p-4">
      <div>
        {filterInformation.map(({ name, initialFilters }) => (
          <MultipleSelectionFilter
            key={name}
            name={name}
            conditions={initialFilters}
            onToggleFilter={handleToggleFilter}
          ></MultipleSelectionFilter>
        ))}
      </div>
      <div className="flex h-max w-full flex-col items-center justify-center">
        수감자 목록
        {filteredIdentities.map((identity) => (
          <IdentityCard key={identity.name} identity={identity}></IdentityCard>
        ))}
      </div>
    </div>
  );
};

export default Sinner;
