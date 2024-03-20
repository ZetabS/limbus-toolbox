'use client';
import Filter from '@/app/sinner/Filter';
import React from 'react';

interface FilterValue {
  name: string;
  initialFilters: string[];
}

const Sinner: React.FC = () => {
  const filterValues: FilterValue[] = [
    { name: '공격 유형', initialFilters: ['참격', '관통', '타격'] }
  ];

  return (
    <div className="flex h-max w-full flex-col items-center justify-center p-4">
      {filterValues.map(({ name, initialFilters }) => {
        return (
          <Filter
            key={name}
            name={name}
            initialFilters={initialFilters}
            onSelectFilter={() => {}}
          ></Filter>
        );
      })}
    </div>
  );
};

export default Sinner;
