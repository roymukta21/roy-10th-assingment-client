import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <img className='w-100%' src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8NDA0JTIwZXJyb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1400" alt="online 404 image" />
             <Link to="/" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
             Go Home
             </Link>
        </div>
       
    );
};

export default ErrorPage;