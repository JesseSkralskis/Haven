import React, { useState } from "react";
import "react-dates/initialize";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByTitle,setStartDate, setEndDate} from "../actions/filters";
import { DateRangePicker } from 'react-dates';
const Filters = ({ setTextFilter, sortByDate, sortByTitle, filters, setStartDate,setEndDate }) => {
  
  const [calenderFocused, setFocus] = useState(  null );

  const handleFocusChange = (calenderFocused) => {
    setFocus( calenderFocused )
  };

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    
    
  };
  
  const handleSelectChange = e => {
    console.log(filters);
   
    if (e.target.value === 'date') {
      sortByDate();
    } else if (e.target.value === 'title') {
      sortByTitle();
    }
   
  };

  const handleTextChange = e => { 
    console.log(calenderFocused)
    setTextFilter(e.target.value)
  };
  

  return (
    // console.log(calenderFocused)
    <div className="bar">
      <div className="filters content-container">
        <select
          className="filters__select"
          value={filters.sortBy}
          onChange={handleSelectChange}
        >
          <option value="title">By Title</option>
          <option value="date">By date</option>
        </select>

        <input
          className="filters__input"
          onChange={handleTextChange}
          type="text"
          placeholder="Search-Blog"
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
  sortByDate: () => dispatch(sortByDate()),
  sortByTitle: () => dispatch(sortByTitle()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
