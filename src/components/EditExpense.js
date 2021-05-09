import React from 'react';
import ExpenseForm from './ExpenseForm';
import * as actions from './../redux/actions';
import { connect, useDispatch } from 'react-redux';

const EditExpense = props => {
    const { id } = props.match.params;
    const dispatch = useDispatch();

    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    dispatch(actions.editExpense(id, expense));
                    props.history.push('/');
                }}
            />
            <button onClick={() => {
                dispatch(actions.removeExpense({ id }));
                props.history.push('/');
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};


export default connect(mapStateToProps, actions)(EditExpense);