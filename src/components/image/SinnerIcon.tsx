import React from 'react';
import Image from 'next/image';
import { SinnerName } from '@/common/typing';

interface SinnerIconProps {
  sinner: SinnerName;
  width?: number;
  height?: number;
}

const SinnerIcon: React.FC<SinnerIconProps> = ({ sinner, width = 20, height = 20 }) => {
  return (
    <Image width={width} height={height} src={`/limbus/sinner_icon/${sinner}.webp`} alt={sinner} />
  );
};

export default SinnerIcon;
