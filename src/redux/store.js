import { createStore } from 'redux';
import reducers from './reducers';
import 'react-dates/lib/css/_datepicker.css';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;