import React, { useState } from 'react';

interface Props {
  name: string;
  conditions: string[];
  onToggleFilter: (value: string) => void;
}

const MultipleSelectionFilter: React.FC<Props> = ({ name, conditions, onToggleFilter }) => {
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  function toggle(condition: string) {
    let updated: string[];
    if (isActive(condition)) {
      updated = selectedConditions.filter((selectedConditions) => selectedConditions !== condition);
    } else {
      updated = [...selectedConditions, condition];
    }
    setSelectedConditions(updated);
    onToggleFilter(condition);
  }

  function toggleAll() {
    if (isAllActive()) {
      for (const selectedCondition of selectedConditions) {
        onToggleFilter(selectedCondition);
      }
      setSelectedConditions([]);
    } else {
      for (const condition of conditions) {
        if (!isActive(condition)) onToggleFilter(condition);
      }
      setSelectedConditions(conditions);
    }
  }

  function isActive(condition: string) {
    return selectedConditions.includes(condition);
  }

  function isAllActive() {
    return selectedConditions.length === conditions.length;
  }

  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="">{name}</div>
      <div className="flex items-center justify-center">
        <button
          className={`${isAllActive() ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-l-md px-4 py-2`}
          onClick={toggleAll}
        >
          ALL
        </button>
        {conditions.map((condition) => (
          <button
            key={condition}
            className={`${isActive(condition) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} px-4 py-2
            ${condition === conditions[conditions.length - 1] ? 'rounded-r-md' : ''}`}
            onClick={() => toggle(condition)}
          >
            {condition}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MultipleSelectionFilter;
