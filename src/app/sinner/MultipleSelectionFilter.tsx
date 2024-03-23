import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@/i18n/i18n';

interface Props {
  category: string;
  conditions: string[];
  onToggle: (value: string) => void;
}

const MultipleSelectionFilter: React.FC<Props> = ({ category, conditions, onToggle }) => {
  const { t } = useTranslation();
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  function toggle(condition: string) {
    let updated: string[];
    if (isActive(condition)) {
      updated = selectedConditions.filter((c) => c !== condition);
    } else {
      updated = [...selectedConditions, condition];
    }
    setSelectedConditions(updated);
    onToggle(condition);
  }

  function toggleAll() {
    if (isAllActive()) {
      for (const selectedCondition of selectedConditions) {
        onToggle(selectedCondition);
      }
      setSelectedConditions([]);
    } else {
      for (const condition of conditions) {
        if (!isActive(condition)) onToggle(condition);
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
            {t(condition)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MultipleSelectionFilter;
