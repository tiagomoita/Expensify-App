const INITIAL_STATE = [];

const expensesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': {
            return [...state, action.expense]
        }
        case 'REMOVE_EXPENSE': {
            return state.filter(({ id }) => id !== action.payload.id)
        }
        case 'EDIT_EXPENSE': {
            return state.map((expense) => {
                if (expense.id === action.payload.id) {
                    return {
                        ...expense,
                        ...action.payload.updates
                    }
                } else {
                    return expense
                }
            });
        }
        default:
            return state;
    }
};

export default expensesReducer;