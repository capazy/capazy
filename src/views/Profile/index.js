import React, { useContext } from 'react';
// context
import { UserContext } from '../../context/UserContext';
// apollo

// components

// utils

const Profile = () => {
  const { data, loading } = useContext(UserContext);
  if (loading) return <p>Loading...</p>;

  return (
    <div className="md:flex font-sans leading-tight min-h-screen bg-grey-lighter p-4">
      <div className="w-full md:w-2/3 mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <div
          className="bg-cover h-40 w-full"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1522093537031-3ee69e6b1746?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a634781c01d2dd529412c2d1e2224ec0&auto=format&fit=crop&w=2098&q=80',
          }}
        ></div>
        <div className="border-b px-4 pb-6">
          <div className="text-center sm:text-left sm:flex mb-4">
            <img
              className="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4"
              src="https://images.unsplash.com/photo-1521818378484-02fdc09f03c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
            <div className="py-2">
              <h3 className="font-bold text-2xl mb-1">{`${data.user.firstName} ${data.user.lastName}`}</h3>
              <div className="inline-flex text-grey-dark sm:flex items-center">
                <svg
                  className="h-5 w-5 text-grey mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    className="heroicon-ui"
                    d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                  />
                </svg>
                {data.user.country}
              </div>
              <div>
                <p>{data.user.description}</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <button className="flex-1 rounded-full bg-blue text-white antialiased font-bold bg-green-600 px-4 py-2 mr-2">
              Contact
            </button>
            <button className="flex-1 rounded-full border-2 border-grey font-semibold text-black px-4 py-2">
              Message
            </button>
          </div>
        </div>
        <div className="px-4 py-4">
          <div className="flex items-center text-grey-darker mb-4">hello</div>
        </div>
      </div>
      <div className="w-full md:w-1/3 mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <p>Skills</p>
        {/* {data.user.skills.map((skill) => (
          <p>{skill}</p>
        ))} */}
      </div>
    </div>
  );
};

export default Profile;
