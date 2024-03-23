import IdentityCard from '@/app/sinner/IdentityCard';
import React, { useContext, useEffect, useState } from 'react';
import { Identity } from '@/common/typing';
import { FilterContext } from '@/app/sinner/FilterState';
import { IDENTITY_DB } from '@/app/sinner/database';
import { getValueByPath } from '@/helper/getValueByPath';

const IdentityList: React.FC = () => {
  const [filterState, dispatch] = useContext(FilterContext);
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
