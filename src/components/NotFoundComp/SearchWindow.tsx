import React, { forwardRef } from "react";
import { Animal } from "./animal-information";
import { Button } from "antd";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

interface SearchWindowProps {
  isVisible: boolean;
  initialCoords: { x: number; y: number } | null;
  keyword: string;
  onKeywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
  results: Animal[];
  isScrolling: boolean;
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
  onAnimationEnd: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

const SearchWindow = forwardRef<HTMLDivElement, SearchWindowProps>(
  (
    {
      isVisible,
      initialCoords,
      keyword,
      onKeywordChange,
      onClose,
      results,
      isScrolling,
      onScroll,
      onAnimationEnd,
      inputRef,
    },
    ref
  ) => {
    if (!isVisible && !initialCoords) {
      // Don't render if not visible and no initial animation coords
      return null;
    }

    // Determine style for initial animation positioning
    const windowStyle: React.CSSProperties = {};
    if (initialCoords) {
      windowStyle.top = `${initialCoords.y}px`;
      windowStyle.left = `${initialCoords.x}px`;
      windowStyle.width = 0; // Start small for animation
      windowStyle.height = 0;
    }

    return (
      <div
        ref={ref}
        className={`search-window z-50 cursor-pointer ${
          isVisible ? "visible" : ""
        }`}
        style={windowStyle}
        onAnimationEnd={onAnimationEnd}
        aria-modal="true"
        role="dialog"
        aria-labelledby="search-window-label"
      >
        <div id="search-window-label" className="sr-only">
          Search Content
        </div>
        <div
          className={`search-window-search ${isScrolling ? "scrolling" : ""}`}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search Pages..."
            value={keyword}
            onChange={onKeywordChange}
            aria-label="Search keyword"
            style={{ marginTop: "10px" }}
          />
          <Button
            icon={<IoCloseSharp style={{ fontSize: "2rem" }} />}
            style={{
              marginTop: 10,
              cursor: "pointer",
              background: "transparent",
              color: "#000",
            }}
            onClick={onClose}
            aria-label="Close search window"
          />
        </div>
        <div className="search-window-section" onScroll={onScroll}>
          <div>
            {" "}
            {/* This div is for React Transition Group or direct mapping */}
            {results.map((data, index) => (
              <NavLink to={"/"+data?.link} replace>
                <div
                  className="search-window-container"
                  key={index} // Using index as key is acceptable if list is static or items don't reorder/change identity
                >
                  <div className="search-window-title">
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      aria-label={`View details for ${data.name}`}
                    >
                      {data.name}
                    </a>
                  </div>
                  <div className="search-window-content">{data.desc}</div>
                </div>
              </NavLink>
            ))}
            {results.length === 0 && keyword.length > 0 && (
              <div className="search-window-container">
                <p className="search-window-content">
                  No animals found matching your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

SearchWindow.displayName = "SearchWindow";
export default SearchWindow;
