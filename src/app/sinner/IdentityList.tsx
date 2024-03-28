import IdentityCard from '@/app/sinner/IdentityCard';
import React, { useEffect, useState } from 'react';
import { Identity } from '@/common/typing';
import { useFilter } from '@/app/sinner/hooks/useFilter';
import { IDENTITY_DB } from '@/app/sinner/hooks/database';
import { getValueByPath } from '@/helper/getValueByPath';

const IdentityList: React.FC = () => {
  const { filterState } = useFilter();
  const [filteredIdentities, setFilteredIdentities] = useState<Identity[]>([]);

  useEffect(() => {
    setFilteredIdentities(
      IDENTITY_DB.filter((identity: Identity) => {
        return Object.entries(filterState).every(([category, conditions]) => {
          return (
            conditions.length === 0 ||
            conditions.some((condition) => {
              return getValueByPath(identity, category) === condition;
            })
          );
        });
      })
    );
  }, [filterState]);

  return (
    <div className="flex h-max w-full flex-col items-center justify-center bg-yellow-100">
      수감자 목록
      {filteredIdentities.map((identity) => (
        <IdentityCard key={identity.sinner} identity={identity}></IdentityCard>
      ))}
    </div>
  );
};

export default IdentityList;
