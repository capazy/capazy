import React, { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import { Redirect } from 'react-router-dom';

// apollo
import { useMutation, useLazyQuery, useQuery } from '@apollo/react-hooks';
import { GET_PROJECTS } from '../../graphql/project';
import { GET_USERS } from '../../graphql/user';
import { JOIN_VACANCY } from '../../graphql/vacancy';

// components
import { UserCard, SelectOne, LoadingCard, FeedCard } from '../../components';

// utils
import allSkillsData from '../../data/allSkillsData.json';

const SearchBar = () => {
  const [searchState, setSearchState] = useState({
    projects: null,
    users: null,
    onSearch: false,
  });
  const { projects, users, onSearch } = searchState;
  const [joinSuccess, setJoinSuccess] = useState(false);

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
    resetForm,
  } = useFormik({
    initialValues: {
      searchType: 'project',
      skill: '',
    },
    onSubmit: ({ skill: { value } }) => {
      if (value) {
        setSearchState({ ...searchState, onSearch: true });
        getProjects({ variables: { skill: value } });
        getUsers({ variables: { skill: value } });
      }
    },
  });
  const { searchType, skill } = values;

  // Mounting the component: all prejects
  const { loading, data, refetch } = useQuery(GET_PROJECTS, {
    variables: { skill: '' },
  });
  refetch();

  // Search projects by skill
  const [getProjects] = useLazyQuery(GET_PROJECTS, {
    onCompleted: (data) => {
      setSearchState({ ...searchState, projects: data, onSearch: true });
    },
  });

  // Search users by skill
  const [getUsers] = useLazyQuery(GET_USERS, {
    onCompleted: (data) => {
      setSearchState({ ...searchState, users: data, onSearch: true });
    },
  });

  // Join a project
  const [joinVacancy] = useMutation(JOIN_VACANCY, {
    update(_, { data }) {
      console.log('Vacancy', data);
    },
  });

  const handleJoin = async (vacancyId) => {
    try {
      await joinVacancy({ variables: { vacancyId } });
      await setJoinSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReset = async () => {
    setSearchState({ ...searchState, onSearch: false });
    resetForm();
    refetch();
  };

  if (joinSuccess) {
    return <Redirect push to="/joined-projects" />;
  }

  if (loading || !data) {
    return <LoadingCard />;
  }

  if (onSearch && (!projects || !users)) {
    return <LoadingCard />;
  }

  return (
    <Fragment>
      <div className="pt-5 w-full px-4 md:px-12">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex items-center py-2">
            <div className="w-full">
              <SelectOne
                options={allSkillsData}
                value={skill}
                field={'skill'}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.skill}
                touched={touched.skill}
                placeholder={'Search projects or users by skill...'}
              />
            </div>
            <p className="text-red-500 text-xs italic">{errors.skill}</p>
            <button
              className="mr-2 flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Search
            </button>
          </div>
          <div className="w-full">
            <input
              type="radio"
              id="project"
              name="searchType"
              value="project"
              onChange={handleChange}
              checked={searchType === 'project' ? true : false}
            />
            <label className="mr-3" htmlFor="project">
              Project
            </label>
            <input
              type="radio"
              id="user"
              name="searchType"
              value="user"
              onChange={handleChange}
              checked={searchType === 'user' ? true : false}
            />
            <label htmlFor="user">User</label>
          </div>
        </form>
        <button
          className="mt-2 flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
          onClick={handleReset}
        >
          Clear Search
        </button>
      </div>

      <div className="container my-2 mx-auto px-4 md:px-12">
        {!onSearch ? (
          <div className="mansonry">
            {data.projects.map((project) => (
              <div key={project._id}>
                <FeedCard project={project} handleJoin={handleJoin} />
              </div>
            ))}
          </div>
        ) : (
          <Fragment>
            {searchType === 'project' && (
              <Fragment>
                <p>Results: {projects.projects.length}</p>
                <div className="mansonry">
                  {projects.projects.map((project) => (
                    <div key={project._id}>
                      <FeedCard project={project} handleJoin={handleJoin} />
                    </div>
                  ))}
                </div>
              </Fragment>
            )}
            {searchType === 'user' && (
              <Fragment>
                <p>Results: {users.users.length}</p>
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                  {users.users.map((user) => (
                    <div
                      key={user._id}
                      className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3  "
                    >
                      <UserCard user={user} />
                    </div>
                  ))}
                </div>
              </Fragment>
            )}
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default SearchBar;
