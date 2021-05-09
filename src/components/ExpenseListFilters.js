import React, { useState } from 'react';
import * as actions from './../redux/actions';
import { connect, useDispatch } from 'react-redux';
import { DateRangePicker } from 'react-dates';

const ExpenseListFilters = props => {
    const { text, sortBy, startDate, endDate } = props.filters;
    const dispatch = useDispatch();
    const [calendarFocused, setCalendarFocused] = useState(null);

    return (
        <div>
            <input type='text' value={text} onChange={(newText) => {
                dispatch(actions.setTextFilter(newText.target.value));
            }} />
            <select value={sortBy} onChange={(newSort) => {
                if (newSort.target.value === 'date') {
                    dispatch(actions.sortByDate());
                }
                else if (newSort.target.value === 'amount') {
                    dispatch(actions.sortByAmount());
                }
            }}>
                <option value='date'>Date</option>
                <option value='amount'>Amount</option>
            </select>
            <DateRangePicker
                startDateId="start"
                endDateId="end"
                startDate={startDate}
                endDate={endDate}
                onDatesChange={({ startDate, endDate}) => {
                    dispatch(actions.setStartDate(startDate))
                    dispatch(actions.setEndDate(endDate))
                }}
                focusedInput={calendarFocused}
                onFocusChange={(focusedInput) => {
                    setCalendarFocused(focusedInput)
                }}
                numberOfMonths={1}
                isOutsideRange={() => false}
                showClearDates={true}
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps, actions)(ExpenseListFilters);
