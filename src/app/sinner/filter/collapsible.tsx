import React, { useState } from 'react';

interface CollapsibleProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, className = '', children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`overflow-hidden rounded-lg bg-white ${className}`}>
      <div
        className="flex w-full cursor-pointer items-center justify-between p-4 transition duration-150 ease-in-out
          hover:bg-gray-100"
        onClick={toggleCollapse}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-xl">{isCollapsed ? '+' : '-'}</span>
      </div>
      <div
        className={`flex w-full items-center justify-center ${isCollapsed ? 'h-0 opacity-0' : 'h-auto opacity-100'}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsible;
