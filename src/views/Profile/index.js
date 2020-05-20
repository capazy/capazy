import React, { useContext } from 'react';
// context
import { UserContext } from '../../context/UserContext';
// apollo

// components

// utils

//query
// {
//   user {
//     _id
//     firstName
//     lastName
//     description
//     skills
//     languages
//     # experience
//     companyName
//     companyDepartment
//     country
//   }
// }

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <p>Loading...</p>;
  const {
    lastName,
    firstName,
    skills,
    description,
    companyName,
    companyDepartment,
    language,
    country,
  } = user;

  return (
    <div className="md:mx-32  h-full">
      <div className="font-sans leading-tight  bg-grey-lighter p-4">
        <div className="bg-white rounded-lg overflow-hidden ">
          <div
            className="bg-cover h-40 w-full"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1522093537031-3ee69e6b1746?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a634781c01d2dd529412c2d1e2224ec0&auto=format&fit=crop&w=2098&q=80',
            }}
          ></div>
          <div className="border-b px-4 ">
            <div className="md:flex md:justify-between text-center  mb-4 ">
              <div className="flex py-2">
                <img
                  className="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4"
                  src="https://images.unsplash.com/photo-1521818378484-02fdc09f03c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  alt=""
                />
                <div className="grid grid-cols-1 ">
                  <h3 className="font-bold text-lg md:text-2xl ">{`${firstName} ${lastName}`}</h3>

                  <div className="text-grey-dark flex ">
                    <svg
                      className="h-5 w-5 text-grey mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                    >
                      <path
                        className=""
                        d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                      />
                    </svg>
                    <p>{user.country}</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 md:my-auto">
                <button className="rounded-full bg-blue text-white antialiased font-bold bg-green-600 px-6 py-2 mr-2 w-full">
                  Contact
                </button>
                {/* <button className="rounded-full border-2 border-grey font-semibold text-black px-4 py-2">
                  Message
                </button> */}
              </div>
            </div>
          </div>

          {/* <div className="w-full md:w-1/3 mx-auto bg-white rounded-lg overflow-hidden">
          <p>Skills</p>
          {skills.map((skill) => (
            <p>{skill}</p>
          ))}
        </div> */}

          <section className="bg-white py-2">
            <div className="container py-2 px-2 mx-auto">
              <p className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-4">
                About me
              </p>

              <p className="mb-2">{description}</p>
            </div>
          </section>

          <div className="flex md:justify-around">
            <div className=" w-full rounded-lg shadow-lg bg-white my-3">
              <div className="border-b border-gray-100 px-5 py-4">
                <div>
                  <i className="fas fa-exclamation-circle text-blue-500"></i>
                  <span className="font-bold text-gray-700 text-lg">
                    Top Skills
                  </span>
                </div>
              </div>

              <div className="px-2 py-4 text-gray-600">
                {skills.map((skill) => (
                  <div className="text-xs inline-flex items-center font-bold leading-sm uppercase m-2 px-3 py-1 bg-green-200 text-green-700 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-arrow-right mr-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
