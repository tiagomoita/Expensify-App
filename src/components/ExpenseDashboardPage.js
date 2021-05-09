import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';

export const ExpenseDashboardPage = () => {
    return (
        <div>
            <ExpenseListFilters />
            <ExpensesList />
        </div>
    );
};

export default ExpenseDashboardPage;