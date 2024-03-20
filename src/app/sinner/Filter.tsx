import React, { useState } from 'react';

interface FilterProps {
  name: string;
  initialFilters: string[];
  onSelectFilter: (filters: string[]) => void;
}

const Filter: React.FC<FilterProps> = ({ name, initialFilters, onSelectFilter }) => {
  const [filters, setFilters] = useState<{ [key: string]: boolean }>(
    initialFilters.reduce((result: { [key: string]: boolean }, filter) => {
      result[filter] = true;
      return result;
    }, {})
  );
  const [selected, setSelected] = useState<number>(initialFilters.length);

  function setAllFilters(value: boolean) {
    const initialState: { [key: string]: boolean } = initialFilters.reduce(
      (result: { [key: string]: boolean }, filter) => {
        result[filter] = value;
        return result;
      },
      {}
    );
    setFilters(initialState);
  }

  function updateFilters(key: string, value: boolean) {
    setFilters({ ...filters, [key]: value });
    setSelected(selected + (value ? 1 : -1));
  }

  function toggleFilters(key: string) {
    updateFilters(key, !filters[key]);
  }

  const FilterButton: React.FC<{ filterKey: string }> = ({ filterKey }) => {
    return (
      <button
        className={`${filters[filterKey] ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} px-4 py-2 ${
          filterKey === initialFilters[initialFilters.length - 1] ? 'rounded-r-md' : ''
        }`}
        onClick={() => toggleFilters(filterKey)}
      >
        {filterKey}
      </button>
    );
  };

  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="">{name}</div>
      <div className="flex items-center justify-center">
        <button
          className={`${selected === initialFilters.length ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}
          rounded-l-md px-4 py-2`}
          onClick={() => {
            if (selected === initialFilters.length) {
              setSelected(0);
              setAllFilters(false);
            } else {
              setSelected(initialFilters.length);
              setAllFilters(true);
            }
          }}
        >
          ALL
        </button>
        {initialFilters.map((filter) => (
          <FilterButton key={filter} filterKey={filter}></FilterButton>
        ))}
      </div>
    </div>
  );
};

export default Filter;
