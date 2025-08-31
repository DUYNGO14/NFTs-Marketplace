"use client";
import React, { useEffect, useState } from "react";
import Styles from "./SearchBar.module.css";
import { BsSearch, BsArrowBarRight, BsX } from "react-icons/bs";

const SearchBar = ({ handleSearch, onClearSearch }) => {
  const [search, setSearch] = useState("");

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim()) {
        handleSearch(search);
      } else {
        onClearSearch();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const handleClear = () => {
    setSearch("");
    onClearSearch();
  };

  return (
    <div className={Styles.searchBar}>
      <div className={Styles.searchBar_box}>
        <BsSearch className={Styles.searchBar_box_icon} />

        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <BsX
            className={`${Styles.searchBar_box_icon} ${Styles.clearBtn}`}
            onClick={handleClear}
          />
        )}

        <BsArrowBarRight
          className={Styles.searchBar_box_icon}
          onClick={() => search.trim() && handleSearch(search)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
