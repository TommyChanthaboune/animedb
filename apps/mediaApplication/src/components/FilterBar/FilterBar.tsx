import React from "react";
import classes from "./FilterBar.module.css";
import { FILTER_TYPES } from "../../stores/MediaStore";
import type { FilterKey } from "../../stores/MediaStore";

type FilterBarProps = {
  search: string;
  filter: {
    movie: boolean;
    "tv-show": boolean;
    game: boolean;
  };
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FilterBar = ({
  search,
  filter,
  onSearchChange,
  onFilterChange,
}: FilterBarProps) => {
  return (
    <form className={`pure-form ${classes.filterBar}`}>
      <input
        value={search}
        type="text"
        className="pure-input-1"
        placeholder="Search Titles"
        onChange={onSearchChange}
      />
      <fieldset>
        {Object.keys(FILTER_TYPES).map((key) => (
          <label
            key={FILTER_TYPES[key as FilterKey]}
            htmlFor={`checkbox-radio-option-${FILTER_TYPES[key as FilterKey]}`}
            className={`pure-checkbox ${classes.filterCheckbox}`}
          >
            <input
              type="checkbox"
              id={`checkbox-radio-option-${FILTER_TYPES[key as FilterKey]}`}
              value={FILTER_TYPES[key as FilterKey]}
              checked={filter[FILTER_TYPES[key as FilterKey]]}
              onChange={onFilterChange}
            />
            {FILTER_TYPES[key as FilterKey]}
          </label>
        ))}
      </fieldset>
    </form>
  );
};

export { FilterBar };
