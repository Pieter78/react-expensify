import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({
  description: 'Water bill',
  amount: 200,
  createdAt: -21000,
}));

store.dispatch(addExpense({
  description: 'Gas bill',
  amount: 300,
  createdAt: -1000,
}));

store.dispatch(setTextFilter('bill'));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

ReactDOM.render(<AppRouter />, document.getElementById('app'));
