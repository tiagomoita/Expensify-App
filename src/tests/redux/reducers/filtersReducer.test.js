import moment from 'moment';
import filtersReducer from '../../../redux/reducers/filtersReducer';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });

});

test('should setup sort by amount filter values', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toEqual('amount');
});

test('should setup sort by date filter values', () => {
    const state = filtersReducer({ text: '', sortBy: 'amount', startDate: undefined, endDate: undefined }, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toEqual('date');
});

test('should set text filter', () => {
    const text = 'This is my filter';
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', payload: { text } });
    expect(state.text).toBe(text);
});


test('should set startDate filter', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: 0,
        endDate: moment().endOf('month')
    }

    const state = filtersReducer(currentState, { type: 'SET_START_DATE', payload: { date: moment().startOf('month') } });
    expect(state.startDate).toEqual(moment().startOf('month'));
});

test('should set endDate filter', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: 0
    }

    const state = filtersReducer(currentState, { type: 'SET_END_DATE', payload: { date: moment().endOf('month') } });
    expect(state.endDate).toEqual(moment().endOf('month'));
});