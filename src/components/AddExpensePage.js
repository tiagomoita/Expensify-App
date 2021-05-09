import React from 'react';
import ExpenseForm from './ExpenseForm';
import * as actions from './../redux/actions';
import { connect } from 'react-redux';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        //const { description, note, amount, createdAt } = expense;
        this.props.addExpense(expense);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return {
        addExpense: (expense) => dispatch(actions.addExpense(expense)),
        //dispatch,
        //actions
    };
}


export default connect(null, mapDispatchToProps)(AddExpensePage);