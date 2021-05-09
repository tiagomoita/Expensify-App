import { addExpense, editExpense, removeExpense } from '../../../redux/actions/expensesActions';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        payload: { id: '123abc' }
    });
});


test('should setup edit expense action object', () => {
    const action = editExpense('123', { note: 'New note value' });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        payload: { id: '123', updates: { note: 'New note value' } }
    });
});

test('should setup add expense action object with provided values', () => {
    const action = addExpense({ description: 'Rent', note: 'New note', amount: 5000, createdAt: 1000 });

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: 'Rent',
            note: 'New note',
            amount: 5000,
            createdAt: 1000
        }
    });

});

test('should setup add expense action object with default values', () => {
    const action = addExpense({});

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });

});