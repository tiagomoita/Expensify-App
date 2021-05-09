import moment from 'moment';
import expensesReducer from '../../../redux/reducers/expensesReducer';
import expenses from '../fixtures/expenses';


test('should setup add expense default value to expenses array', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([]);
});


test('should add an expense', () => {
    const expense = {
        id: '109',
        description: 'Coffe',
        note: '',
        amount: 50,
        createdAt: moment(0).add(3, 'days').valueOf()
    }

    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense });
    expect(state).toEqual([...expenses, expense]);

});

test('should remove expense by id', () => {
    const action = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', payload: { id: expenses[1].id } })
    expect(action).toEqual([expenses[0], expenses[2]]);

});

test('should not remove expense if id not found', () => {
    const action = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', payload: { id: '-1' } })
    expect(action).toEqual(expenses);

});

test('should edit and expense', () => {
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        payload: { id: expenses[0].id, updates: { description: 'new Update' } }
    })

    expect(state[0].description).toBe('new Update');

});

test('should not edit expense if expense not found', () => {
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        payload: { id: '-1', updates: { amount: 3 } }
    })

    expect(state).toEqual(expenses);
});