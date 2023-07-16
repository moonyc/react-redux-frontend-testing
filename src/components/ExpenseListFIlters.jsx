import React from "react";
import { connect } from 'react-redux'
import dayjs from 'dayjs'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

const ExpenseListFilters = (props) => {
    const [calendarFocused, setCalendardFocused] = useState(null)

    onDateChange = ({ startDate, endDate}) => {
        props.dispatch(setStartDate(startDate))
        props.dispatch(setEndDate(endDate))
    }

    onFocusChange = (calendarFocused) => {
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
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      filters: state.filters
    };
  };

export default connect(mapStateToProps)(ExpenseListFilters);