

export const setTextFilter = (text = '') => {
    return (
        {
            type: 'SET_TEXT_FILTER',
            payload: { text }
        }
    );
};

export const sortByAmount = () => {
    return (
        {
            type: 'SORT_BY_AMOUNT',
        }
    );
};

export const sortByDate = () => {
    return (
        {
            type: 'SORT_BY_DATE',
        }
    );
};

export const setStartDate = (date) => {
    return (
        {
            type: 'SET_START_DATE',
            payload: { date }
        }
    );
};

export const setEndDate = (date) => {
    return (
        {
            type: 'SET_END_DATE',
            payload: { date }
        }
    );
};