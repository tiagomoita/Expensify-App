import { createStore } from 'redux';
import reducers from './reducers';
import * as actions from './actions';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(actions.addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(actions.addExpense({ description: 'Gas bill', amount: 5000, createdAt: 1000 }));
store.dispatch(actions.addExpense({ description: 'Rent', amount: 6000}));

store.subscribe(() => {
   const state = store.getState();
   const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
   console.log(visibleExpenses);
});

export default store;