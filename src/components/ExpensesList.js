import React from 'react';
import * as actions from './../redux/actions';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from './../redux/selectors/expenses';

export const ExpensesList = props => {


    const { expenses } = props;
    return (
        <div>
            { expenses.length === 0 ? (
                <p>No Expenses</p>
            ) : (
                expenses.map((expense, index) => {
                    return (
                        //NOT A GOOD IDEA TO USE INDEX AS A KEY, IS BETTER TO USE THE ID
                        <ExpenseListItem key={index} {...expense} />
                    );
                })
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps, actions)(ExpensesList);