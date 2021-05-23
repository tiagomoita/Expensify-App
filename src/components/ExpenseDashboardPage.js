import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

export const ExpenseDashboardPage = () => {
    return (
        <div>
            <ExpensesSummary />
            <ExpenseListFilters />
            <ExpensesList />
        </div>
    );
};

export default ExpenseDashboardPage;