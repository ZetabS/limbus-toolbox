import React from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type Src = string | StaticImport;

interface Props {
  alt: string | (() => string);
  src: Src | (() => Src);
}

const AutoSizeImage: React.FC<Props> = ({ alt, src }) => {
  return (
    <Image
      width={0}
      height={0}
      className={'h-full w-full object-contain'}
      src={typeof src === 'function' ? src() : src}
      alt={typeof alt === 'function' ? alt() : alt}
    />
  );
};

export default AutoSizeImage;
