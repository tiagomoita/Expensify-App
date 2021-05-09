import moment from 'moment';

const INITIAL_STATE = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

const filtersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER': {
            return {...state, text: action.payload.text}
        }
        case 'SORT_BY_AMOUNT': {
            return {...state, sortBy: 'amount'}
        }
        case 'SORT_BY_DATE': {
            return {...state, sortBy: 'date'}
        }
        case 'SET_START_DATE': {
            return {...state, startDate: action.payload.date}
        }
        case 'SET_END_DATE': {
            return {...state, endDate: action.payload.date}
        }
        default:
            return state;
    }
};

export default filtersReducer;