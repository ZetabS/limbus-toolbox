import React from 'react';
import { useTranslation } from 'react-i18next';
import '@/i18n/i18n';
import { Identity } from '@/common/typing';

interface Props {
  identity: Identity;
}

const IdentityCard: React.FC<Props> = ({ identity }) => {
  const { t } = useTranslation();
  return (
    <div className="flex h-32 w-64 flex-col border-4 border-amber-700">
      <div className="flex ">
        {t(`identityName.${identity.name}`)} {t(identity.sinner)}
      </div>
    </div>
  );
};

export default IdentityCard;
