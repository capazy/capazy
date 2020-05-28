import React, { useContext, useState } from 'react';

// context
import { UserContext } from '../../context/UserContext';

// apollo
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_BY_ID } from '../../graphql/user';
import { Link } from 'react-router-dom';

// components
import { FileUploader } from '../../components';

const Profile = ({ match }) => {
  const [openPrifilePictureModal, setOpenPrifilePictureModal] = useState(false);
  const { user, update } = useContext(UserContext);
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
    skills,
    description,
    companyName,
    companyDepartment,
    languages,
    country,
    profilePictureUrl,
  } = data.userById;

  const isOwner = match.params.id === _id;

  const handleChangeProfilePicture = () => {
    setOpenPrifilePictureModal(!openPrifilePictureModal);
  };

  return (
    <div className="md:mx-32  h-full">
      {openPrifilePictureModal && (
        <FileUploader
          action={update}
          field={{
            fileName: 'profilePictureName',
            fileUrl: 'profilePictureUrl',
          }}
          accept={'image/*'}
          multiple={false}
        />
      )}
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
                  src={profilePictureUrl}
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
                  <button onClick={handleChangeProfilePicture}>
                    Change profile picture
                  </button>
                </div>
              </div>
              <div className="mt-3 md:my-auto">
                {!isOwner ? (
                  <Link to="#">
                    <button className="rounded-full bg-blue text-white antialiased font-bold bg-green-600 px-6 py-2 mr-2 w-full">
                      Contact
                    </button>
                  </Link>
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

              <p className="mb-2">{description}</p>
              <p className="font-semibold">Languages:</p>
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
          {/* SKILLS */}
          <section className="flex md:justify-around">
            <div className=" w-full rounded-lg shadow-lg bg-white my-3">
              <div className="border-b border-gray-100 px-5 py-4">
                <div>
                  <i className="fas fa-exclamation-circle text-blue-500"></i>
                  <span className="font-bold text-gray-700 text-lg">
                    Top Skills
                  </span>
                </div>
              </div>

              <div className="px-2 py-2 text-gray-600">
                {skills.map((skill) => (
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

          {/* COMPANY */}
          <section className="flex md:justify-around">
            <div className=" w-full rounded-lg shadow-lg bg-white my-3">
              <div className="border-b border-gray-100 px-5 py-4">
                <div>
                  <i className="fas fa-exclamation-circle text-blue-500"></i>
                  <span className="font-bold text-gray-700 text-lg">
                    Company
                  </span>
                </div>
                <div className="py-2">
                  <p className="px-2 mt-2 text-gray-600">
                    {/* <span className="font-semibold">Name: </span> */}
                    {companyName}
                  </p>

                  <p className="px-2 mt-2 text-gray-600">
                    <span className="font-semibold">Department: </span>
                    {companyDepartment}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
