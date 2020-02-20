import React, { useState } from "react";
import "react-dates/initialize";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByOldest,
  sortByRecent,
  setStartDate,
  setEndDate
} from "../actions/filters";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "../styles/css/react_dates_overrides.scss";
const Filters = ({
  setTextFilter,
  sortByRecent,
  sortByOldest,
  filters,
  setStartDate,
  setEndDate
}) => {
  const [calenderFocused, setFocus] = useState(null);

  const handleFocusChange = calenderFocused => {
    setFocus(calenderFocused);
  };

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const handleSelectChange = e => {
    if (e.target.value === "recent") {
      sortByRecent();
    } else if (e.target.value === "oldest") {
      sortByOldest();
    }
  };

  const handleTextChange = e => {
    console.log(calenderFocused);
    setTextFilter(e.target.value);
  };

  return (
    <div className="filters__content-container">
      <h2>Search Features</h2>
      <select
        className="filters__select"
        value={filters.sortBy}
        onChange={handleSelectChange}
      >
        <option value="recent">Most recent blog </option>
        <option value="oldest">Oldest Blog first </option>
      </select>

      <input
        className="filters__input"
        onChange={handleTextChange}
        type="text"
        placeholder="Search for a blog with a key word"
      ></input>

      <div className="filters__datebox">
        <DateRangePicker
          startDate={filters.startDate}
          startDateId={"abcd5678"}
          endDate={filters.endDate}
          endDateId={"abc1235"}
          onDatesChange={handleDatesChange}
          focusedInput={calenderFocused}
          onFocusChange={handleFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => ({
  setTextFilter: value => dispatch(setTextFilter(value)),
  sortByRecent: () => dispatch(sortByRecent()),
  sortByOldest: () => dispatch(sortByOldest()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
