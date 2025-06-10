import React, { useState, useEffect, useRef, useCallback } from "react";
import SearchIcon from "../components/NotFoundComp/SearchIcon";
import SearchWindow from "../components/NotFoundComp/SearchWindow";
import "../css/404.css";
import {
  Animal,
  getAnimalInformation,
} from "../components/NotFoundComp/animal-information";

export default function NotFound() {
  const [searchIconVisible, setSearchIconVisible] = useState(false);
  const [searchIconPosition, setSearchIconPosition] = useState({ x: 0, y: 0 });
  const searchIconRef = useRef<HTMLDivElement>(null);

  const [searchWindowVisible, setSearchWindowVisible] = useState(false);
  const [searchWindowInitialCoords, setSearchWindowInitialCoords] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const searchWindowRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [allAnimals, setAllAnimals] = useState<Animal[]>([]);
  const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>([]);
  const [isSearchWindowScrolling, setIsSearchWindowScrolling] = useState(false);

  const animationFrameId = useRef<number | null>(null);

  // Fetch animal data
  useEffect(() => {
    async function fetchData() {
      const data = await getAnimalInformation();
      console.log(data);
      setAllAnimals(data);
      setFilteredAnimals(data); // Initially show all
    }
    fetchData();
  }, []);

  // Filter animals based on keyword
  useEffect(() => {
    if (searchKeyword.trim() === "") {
      setFilteredAnimals(allAnimals);
    } else {
      const lowerKeyword = searchKeyword.toLowerCase();
      setFilteredAnimals(
        allAnimals.filter(
          (animal) =>
            animal.name.toLowerCase().includes(lowerKeyword) ||
            // animal.desc.toLowerCase().includes(lowerKeyword) ||
            animal.link.toLowerCase().includes(lowerKeyword)
        )
      );
    }
  }, [searchKeyword, allAnimals]);

  // Focus search input when search window becomes visible (after animation)
  useEffect(() => {
    if (
      searchWindowVisible &&
      !searchWindowInitialCoords &&
      searchInputRef.current
    ) {
      searchInputRef.current.focus();
    }
  }, [searchWindowVisible, searchWindowInitialCoords]);

  const updateSearchIconPosition = useCallback(
    (clientX: number, clientY: number) => {
      if (searchIconRef.current) {
        const iconSize =
          searchIconRef.current.offsetWidth ||
          parseFloat(
            getComputedStyle(document.documentElement)
              .getPropertyValue("--search-icon-size")
              .replace("rem", "")
          ) * 16; // Fallback to CSS var
        setSearchIconPosition({
          x: clientX - iconSize / 2,
          y: clientY - iconSize / 2,
        });
      } else {
        // Fallback if ref not ready, though ideally it should be.
        const fallbackIconSize =
          parseFloat(
            getComputedStyle(document.documentElement)
              .getPropertyValue("--search-icon-size")
              .replace("rem", "")
          ) * 16;
        setSearchIconPosition({
          x: clientX - fallbackIconSize / 2,
          y: clientY - fallbackIconSize / 2,
        });
      }
    },
    []
  );

  const handleMouseMove = useCallback(
    (evt: React.MouseEvent<HTMLDivElement>) => {
      if (searchIconVisible) {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
        animationFrameId.current = requestAnimationFrame(() => {
          updateSearchIconPosition(evt.clientX, evt.clientY);
        });
      }
    },
    [searchIconVisible, updateSearchIconPosition]
  );

  const handleTouchMove = useCallback(
    (evt: React.TouchEvent<HTMLDivElement>) => {
      if (searchIconVisible && evt.touches[0]) {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
        animationFrameId.current = requestAnimationFrame(() => {
          updateSearchIconPosition(
            evt.touches[0].clientX,
            evt.touches[0].clientY
          );
        });
      }
    },
    [searchIconVisible, updateSearchIconPosition]
  );

  const showSearchIcon = useCallback(() => {
    if (!searchWindowVisible) {
      setSearchIconVisible(true);
    }
  }, [searchWindowVisible]);

  const hideSearchIcon = useCallback(() => {
    setSearchIconVisible(false);
  }, []);

  const showSearchBar = useCallback(
    (evt: MouseEvent | TouchEvent) => {
      if (!searchWindowVisible) {
        const clientX =
          "clientX" in evt
            ? evt.clientX
            : (evt.touches && evt.touches[0]?.clientX) || 0;
        const clientY =
          "clientY" in evt
            ? evt.clientY
            : (evt.touches && evt.touches[0]?.clientY) || 0;

        setSearchWindowInitialCoords({ x: clientX, y: clientY });
        setSearchWindowVisible(true);
        setSearchIconVisible(false); // Hide icon when search bar appears
      }
    },
    [searchWindowVisible]
  );

  const handleContainerClick = useCallback(
    (evt: React.MouseEvent<HTMLDivElement>) => {
      showSearchBar(evt.nativeEvent);
    },
    [showSearchBar]
  );

  const handleContainerTouchEnd = useCallback(
    (evt: React.TouchEvent<HTMLDivElement>) => {
      if (evt.changedTouches && evt.changedTouches[0]) {
        // Cast to unknown first, then to TouchEvent to satisfy type checking for clientX/clientY
        showSearchBar(evt.changedTouches[0] as unknown as TouchEvent);
      }
    },
    [showSearchBar]
  );

  const hideSearchBar = useCallback(() => {
    if (searchWindowRef.current) {
      searchWindowRef.current.classList.add("closing"); // Add class to trigger fade-out
    }
    // Wait for animation to complete before truly hiding and resetting
    const fadeTimeStr = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--search-fade-time");
    const fadeTimeMs = parseFloat(
      fadeTimeStr.endsWith("ms")
        ? fadeTimeStr
        : (parseFloat(fadeTimeStr) * 1000).toString()
    );

    setTimeout(() => {
      setSearchWindowVisible(false);
      setSearchWindowInitialCoords(null);
      setSearchKeyword("");
      setIsSearchWindowScrolling(false);
      if (searchWindowRef.current) {
        searchWindowRef.current.classList.remove("closing");
      }
    }, fadeTimeMs);
  }, []);

  const handleSearchWindowScroll = useCallback(
    (evt: React.UIEvent<HTMLDivElement>) => {
      setIsSearchWindowScrolling(evt.currentTarget.scrollTop > 0);
    },
    []
  );

  const handleSearchWindowAnimationEnd = useCallback(() => {
    if (searchWindowVisible && searchWindowInitialCoords) {
      // After initial animation from click point, set to null to use fixed position
      setSearchWindowInitialCoords(null);
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }
  }, [searchWindowVisible, searchWindowInitialCoords]);

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div
      className="error-container"
      onClick={handleContainerClick}
      onMouseEnter={showSearchIcon}
      onMouseLeave={hideSearchIcon}
      onMouseMove={handleMouseMove}
      onTouchStart={showSearchIcon} // Show icon on touch start
      onTouchEnd={handleContainerTouchEnd} // Show search bar on touch end
      onTouchMove={handleTouchMove}
      onTouchCancel={hideSearchIcon}
      role="button"
      tabIndex={0}
      aria-label="Error page, click or tap to search"
    >
      <div className="error-code" aria-hidden="true">
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </div>
      <h1 className="error-title-main">ERROR</h1>
      <p className="error-message">PAGE NOT FOUND</p>
      <p className="error-message">
        I think you just went to a non-existing page.
      </p>
      <p className="error-message">
        Click or tap anywhere on the screen if you want to search for something.
      </p>

      <SearchIcon
        ref={searchIconRef}
        isVisible={searchIconVisible}
        position={searchIconPosition}
      />

      <SearchWindow
        ref={searchWindowRef}
        isVisible={searchWindowVisible}
        initialCoords={searchWindowInitialCoords}
        keyword={searchKeyword}
        onKeywordChange={(e) => setSearchKeyword(e.target.value)}
        onClose={hideSearchBar}
        results={filteredAnimals}
        isScrolling={isSearchWindowScrolling}
        onScroll={handleSearchWindowScroll}
        onAnimationEnd={handleSearchWindowAnimationEnd}
        inputRef={searchInputRef}
      />
    </div>
  );
}
