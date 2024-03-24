'use client';
import React from 'react';
import { FilterProvider } from '@/app/sinner/filter/FilterState';
import FilterList from '@/app/sinner/filter/FilterList';
import IdentityList from '@/app/sinner/IdentityList';

const Sinner: React.FC = () => {
  return (
    <FilterProvider>
      <div className="flex h-max w-full flex-col items-center justify-center gap-4 py-4">
        <FilterList></FilterList>
        <IdentityList></IdentityList>
      </div>
    </FilterProvider>
  );
};

export default Sinner;
