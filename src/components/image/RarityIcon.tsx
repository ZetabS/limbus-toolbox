import React from 'react';
import Image from 'next/image';

interface RarityIconProps {
  rarity: string;
  width?: number;
  height?: number;
}

const RarityIcon: React.FC<RarityIconProps> = ({ rarity, width = 20, height = 20 }) => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-green-400">
      <img
        src={`/limbus/rarity_icon/${rarity}.webp`}
        alt={rarity}
        className="h-full w-20 object-cover "
      />
    </div>
  );
};

export default RarityIcon;
