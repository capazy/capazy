import React, { useContext } from 'react';

// context
import { UserContext } from '../../context/UserContext';
import { ChatContext } from '../../context/ChatContext';

// apollo
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_BY_ID } from '../../graphql/user';
import { Link } from 'react-router-dom';
import { createGroupChannel } from '../../utils/chat';

// components

const Profile = ({ match, history }) => {
  const { user } = useContext(UserContext);
  const { sb } = useContext(ChatContext);
  const { loading, data, refetch } = useQuery(GET_USER_BY_ID, {
    variables: { userId: match.params.id },
  });

  refetch();

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>Loading...</p>;

  const { _id } = user;
  const {
    lastName,
    firstName,
    additionalSkills,
    description,
    workExperience,
    languages,
    education,
    country,
    profilePictureUrl,
    files,
  } = data.userById;

  const isOwner = match.params.id === _id;
  const image =
    profilePictureUrl ||
    'https://res.cloudinary.com/dpnlmwgxh/image/upload/v1590759814/Main/avatar_qwrlq9.png';

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
                {/* mt-6 rounded-lg shadow-xl sm:h-64 sm:w-full sm:object-cover sm:object-center */}
                <img
                  className="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4 object-cover object-center"
                  src={image}
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
                    <p>{country}</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 md:my-auto">
                {!isOwner ? (
                  <button
                    className="rounded-full bg-blue text-white antialiased font-bold bg-green-600 px-6 py-2 mr-2 w-full"
                    onClick={() =>
                      createGroupChannel(sb, data.userById, history)
                    }
                  >
                    Contact
                  </button>
                ) : (
                  <Link to={`/user/edit/${_id}`}>
                    <button className="w-full rounded-full bg-blue text-white antialiased font-bold bg-gray-500 px-6 py-2 mr-2 ">
                      Edit Profile
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* GENERAL DESCRIPTION */}
          <section className="bg-white py-2">
            <div className="container py-2 px-2 mx-auto">
              <p className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-4">
                About me
              </p>

              <p className="mb-6">{description}</p>
              <div>
                <i className="fas fa-exclamation-circle text-blue-500"></i>
                <span className="font-bold text-gray-700 text-lg">
                  Languages:
                </span>
              </div>
              <div className="px-0 py-4">
                {languages.map((language) => (
                  <span
                    className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2"
                    key={language}
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* FILES */}

          <div className="container  w-full ">
            <div>
              <i className="fas fa-exclamation-circle text-blue-500"></i>
              <span className="font-bold text-gray-700 text-lg">Files:</span>
            </div>
            <ul className="flex flex-col p-4">
              {files.map((file) => (
                <li className="border-gray-400 flex flex-row mb-2 w-full">
                  <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <span
                      role="img"
                      aria-labelledby="book"
                      className="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4"
                    >
                      📖
                    </span>
                    <div className="flex-1 pl-1 mr-16">
                      <div className="font-medium">{file.name}</div>
                    </div>
                    <a
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="text-gray-600 text-xs">View</div>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* SKILLS */}
          <section className="flex md:justify-around">
            <div className=" w-full rounded-lg shadow-lg bg-white my-3">
              <div className="border-b border-gray-100 py-4">
                <div>
                  <i className="fas fa-exclamation-circle text-blue-500"></i>
                  <span className="font-bold text-gray-700 text-lg">
                    Top Skills
                  </span>
                </div>
              </div>

              <div className="px-2 py-2 text-gray-600">
                {additionalSkills.map((skill) => (
                  <div
                    key={skill}
                    className="text-xs inline-flex items-center font-bold leading-sm uppercase m-2 px-3 py-1 bg-green-200 text-green-700 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
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
          </section>

          {/* EXPERIENCE */}
          <section className="flex md:justify-around">
            <div className="w-full ">
              <div className="border-b border-gray-100 px-1 py-4">
                <div>
                  <i className="fas fa-exclamation-circle text-blue-500"></i>
                  <span className="font-bold text-gray-700 text-lg">
                    Experience
                  </span>
                </div>
                {workExperience.map((exp) => (
                  <div className="py-2 w-full rounded-lg shadow-lg bg-white my-3 p-4">
                    <p className="px-2 mt-2 text-gray-600">
                      <span className="font-semibold">Company: </span>
                      {exp.companyName}
                    </p>

                    <p className="px-2 mt-2 text-gray-600">
                      <span className="font-semibold">Position: </span>
                      {exp.title}
                    </p>
                    <p className="px-2 mt-2 text-gray-600 italic">
                      <span className="font-semibold">Time: </span>
                      {exp.yearsOfExperience}
                    </p>
                    <p className="px-2 mt-2 text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* EDUCATION */}
          <section className="flex md:justify-around">
            <div className="w-full ">
              <div className="border-b border-gray-100 px-1 py-4">
                <div>
                  <i className="fas fa-exclamation-circle text-blue-500"></i>
                  <span className="font-bold text-gray-700 text-lg">
                    Education
                  </span>
                </div>
                {education.map((edu) => (
                  <div className="py-2 w-full rounded-lg shadow-lg bg-white my-3 p-4">
                    <p className="px-2 mt-2 text-gray-600">
                      <span className="font-semibold">Degree: </span>
                      {edu.degree}
                    </p>

                    <p className="px-2 mt-2 text-gray-600">
                      <span className="font-semibold">Field: </span>
                      {edu.fieldOfStudy}
                    </p>
                    <p className="px-2 mt-2 text-gray-600 italic">
                      <span className="font-semibold">School: </span>
                      {edu.school}
                    </p>
                    <p className="px-2 mt-2 text-gray-600">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
