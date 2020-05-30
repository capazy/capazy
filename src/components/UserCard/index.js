import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({
  user: { _id, firstName, lastName, country, description },
}) => {
  return (
    <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden my-2">
      <img
        className="w-full h-32 object-cover object-center"
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="avatar"
      />
      <div className="flex items-center px-6 py-1 bg-gray-800">
        <h1 className="mx-3 text-white font-semibold text-lg">
          {firstName} {lastName}
        </h1>
      </div>
      <div className="py-4 px-4">
        <h1 className="text-md font-semibold text-gray-800">{country}</h1>
        <p className="py-2 text-sm text-gray-700">{description}</p>
        <Link className="hover:text-blue-500" to={`profile/${_id}`}>
          view profile
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
