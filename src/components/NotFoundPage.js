import React from 'react';
import { Link } from 'react-router-dom';

//Link -> Client-Side Routing
export const NotFoundPage = () => {
    return (
        <div>
            404 - <Link to="/">Go Home</Link>
        </div>
    );
};

export default NotFoundPage;