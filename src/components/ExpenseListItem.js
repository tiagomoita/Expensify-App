import React from 'react';
import { Link } from 'react-router-dom';

export const ExpenseListItem = props => {
    const { id, description, amount, createdAt } = props;

    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h1>{description}</h1>
            </Link>
            <p>amount: {amount}€ - createdAt: {createdAt}</p>
        </div>
    );
};


export default ExpenseListItem;
