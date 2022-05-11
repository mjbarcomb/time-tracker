import React, { useEffect } from "react";
import { useActiveElement } from "../../Hooks";
import Style from "./FilterCard.module.css";

const FilterCard = (props) => {
  const { filterOptions, selectedFilterOption, setSelectedFilterOption } =
    props;
  const isSelected = (option) => option === selectedFilterOption;
  const focusedElement = useActiveElement();
  const clickIfFocused = (event) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      focusedElement.childNodes[0].click();
    }
    return focusedElement;
  };

  return (
    <div className={Style.filterCard}>
      <form className={Style.segmentedControl} role="group">
        {filterOptions.map((option, i) => (
          <div
            className={
              isSelected(option)
                ? `${Style.selected} ${Style.segment}`
                : Style.segment
            }
            key={option}
            role="button"
            tabIndex="0"
            onKeyDown={clickIfFocused}
          >
            <input
              type="radio"
              tabIndex="-1"
              id={`filter-option ${i}`}
              value={option}
              checked={option === selectedFilterOption}
              onChange={(e) => setSelectedFilterOption(e.currentTarget.value)}
            />
            <label
              className={Style.segmentLabel}
              htmlFor={`filter-option ${i}`}
            >{`${option[0].toUpperCase()}${option.slice(1)}`}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default FilterCard;
