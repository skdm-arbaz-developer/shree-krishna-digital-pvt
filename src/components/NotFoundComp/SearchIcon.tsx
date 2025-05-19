import React, { forwardRef } from 'react';

interface SearchIconProps {
  isVisible: boolean;
  position: { x: number; y: number };
}

const SearchIcon = forwardRef<HTMLDivElement, SearchIconProps>(
  ({ isVisible, position }, ref) => {
    if (!isVisible) {
      // Using a simple opacity transition for hiding.
      // The 'hidden' class will be added by parent.
      // This check mainly helps avoid rendering an invisible element unnecessarily.
      return <div ref={ref} className="search-icon hidden" style={{ top: `${position.y}px`, left: `${position.x}px` }} />;
    }
    
    return (
      <div
        ref={ref}
        className={`search-icon ${isVisible ? 'visible' : 'hidden'}`}
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
        aria-hidden="true" 
      />
    );
  }
);

SearchIcon.displayName = 'SearchIcon';
export default SearchIcon;
