import React from 'react';
import '@/i18n/i18n';
import { FilterConfig } from '@/app/sinner/hooks/useFilter';
import { ConfigContext } from '@/app/sinner/hooks/ConfigContext';
import { FilterButtonList } from '@/app/sinner/FilterButtonList';
import { chunkArray } from '@/helper/chunkArray';

interface Props {
  config: FilterConfig;
}

const Filter: React.FC<Props> = ({ config }) => {
  return (
    <ConfigContext.Provider value={config}>
      {config.column ? (
        <>
          <div className="hidden md:flex">
            <FilterButtonList conditions={config.conditions}></FilterButtonList>
          </div>
          <div className="flex flex-col md:hidden">
            {chunkArray(config.conditions, config.column).map((conditions, index) => (
              <FilterButtonList key={index} conditions={conditions}></FilterButtonList>
            ))}
          </div>
        </>
      ) : (
        <FilterButtonList conditions={config.conditions}></FilterButtonList>
      )}
    </ConfigContext.Provider>
  );
};

export default Filter;
