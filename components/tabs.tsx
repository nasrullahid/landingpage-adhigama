// Use client directive for Next.js to ensure this code runs on the client-side.
"use client";

import React, { ReactElement, useState } from "react";

interface TabProps {
  label: string; // Define type for `label` prop expected by `Tab`
  children: React.ReactNode; // `children` can be of any valid React node type
}

interface TabsProps {
  children: ReactElement<TabProps>[]; // Specify that children should be an array of elements with TabProps
}

const Tabs = ({ children }: TabsProps) => {
  // Initialize `activeTab` with the label of the first child, assuming at least one child is always present
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  // Define the click handler with proper event typing
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, newActiveTab: string) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="w-full mx-auto">
      <div className="flex overflow-scroll text-xs md:text-base border-b border-gray-100 dark:border-gray-700">
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`${activeTab === child.props.label
              ? "bg-gray-100 dark:bg-gray-700 border-b border-purple-600"
              : ""
              } flex-1 dark:text-white font-medium py-2 px-4`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab = ({ label, children }: TabProps) => {
  return (
    <div data-label={label} className="hidden">
      {children}
    </div>
  );
};

export { Tabs, Tab };