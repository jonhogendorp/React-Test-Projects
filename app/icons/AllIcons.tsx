'use client';
// Import React and useState
import React, { useState, ChangeEvent } from 'react';

// Import all icons from Heroicons
import * as HeroIcons from '@heroicons/react/24/outline';

// Define the type for the icon size state
type IconSizeState = number;

// Create a component to render the icons
const AllIcons: React.FC = () => {
  const [iconSize, setIconSize] = useState<IconSizeState>(24);

  const handleSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setIconSize(value);
    }
  };

  return (
    <div>
      <h1>All Heroicons</h1>
      <label>
        Icon Size:
        <input type='number' value={iconSize} onChange={handleSizeChange} />
      </label>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.keys(HeroIcons).map((iconName) => {
          const IconComponent = (
            HeroIcons as Record<
              string,
              React.ComponentType<{ style: React.CSSProperties }>
            >
          )[iconName];
          return (
            <div
              className='flex flex-col items-center justify-center'
              key={iconName}
              style={{ margin: '10px', textAlign: 'center' }}
            >
              <IconComponent style={{ width: iconSize, height: iconSize }} />
              <div className='text-xs'>{iconName}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllIcons;
