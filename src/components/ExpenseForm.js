import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

//const now = moment();
//console.log(now.format('MMMM Do, YYYY'));

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };

    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    onDateChange = (date) => {
        if(date) {
            this.setState(() => ({ createdAt: date }))
        }
    };

    onFocusChange = ({focused}) => {
        this.setState(() => ({ calenderFocused: focused }));
    };


    render() {
        console.log(this.state.calenderFocused);
        return (
            <div>
                {this.state.error}
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        value={this.state.description}
                        placeholder='Description'
                        autoFocus
                        onChange={(newText) => {
                            const description = newText.target.value;
                            this.setState(() => ({ description }));
                        }}
                    />
                    <input
                        type='text'
                        value={this.state.amount}
                        placeholder='Amount'
                        onChange={(newAmount) => {
                            if (!newAmount.target.value || newAmount.target.value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                                const amount = newAmount.target.value;
                                this.setState(() => ({ amount }));
                            }
                        }}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder='Add a note for your expense(optional)'
                        value={this.state.note}
                        onChange={(newNote) => { this.setState(() => ({ note: newNote.target.value })) }}
                    >
                    </textarea>
                    {this.props.expense ? (<button>Save Expense</button>) : <button>Add Expense</button>}
                </form>
            </div >
        );
    }
};

export default ExpenseForm;
