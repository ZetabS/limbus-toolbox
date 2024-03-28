import React from 'react';
import Filter from '@/app/sinner/Filter';

const FilterList: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <Filter category={'sinner'} column={6} imagePath={(c) => `/sinner_icon/${c}.webp`}></Filter>
      <Filter category={'rarity'} imagePath={(c) => `/rarity_icon/${c}.webp`}></Filter>
    </div>
  );
};

export default FilterList;
