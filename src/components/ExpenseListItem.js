import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = props => {
    const { id, description, amount, createdAt } = props;

    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h1>{description}</h1>
            </Link>
            <p>
                {'€' + numeral(amount / 100).format('0,0.00')} 
                - 
                {moment(createdAt).format('MMMM Do, YYYY')}
            </p>
        </div>
    );
};


export default ExpenseListItem;
