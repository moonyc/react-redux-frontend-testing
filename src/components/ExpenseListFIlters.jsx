import React from "react";
import { connect } from 'react-redux'
import dayjs from 'dayjs'
import { useState } from 'react'
import { DatePicker } from '@mui/x-date-pickers';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

const ExpenseListFilters = (props) => {
    const [calendarFocused, setCalendardFocused] = useState(null)

    const handleDateChange = ({ startDate, endDate}) => {
        props.dispatch(setStartDate(startDate))
        props.dispatch(setEndDate(endDate))
    }

    const handleFocusChange = (calendarFocused) => {
        setCalendardFocused(calendarFocused)
    }

    return(
        <div>
            <input
                type="text"
                value={props.filters.text}
                onChange={(e) => {
                    props.dispatch(setTextFilter(e.target.value))
                }}
            />
            <select
                value={props.filters.sortBy}
                onChange={(e) => {
                    if (e.target.value === "date") {
                        props.dispatch(sortByDate())
                    } else if (e.target.value === 'amount') {
                        props.dispatch(sortByAmount())
                    }
                }}
            >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DatePicker
                    label="Your Expense Date Picker"
                    value={props.filters.startDate}
                    onChange={handleDateChange}
                    autoFocus={calendarFocused}
                    openTo="day"
                    orientation="landscape"
                    onClose={handleFocusChange}
                />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      filters: state.filters
    };
  };

export default connect(mapStateToProps)(ExpenseListFilters);