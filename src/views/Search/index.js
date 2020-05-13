import React, { Fragment, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Redirect } from 'react-router-dom';

// apollo
import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import { GET_PROJECTS } from '../../graphql/project';
import { JOIN_VACANCY } from '../../graphql/vacancy';

// components
import { CardProject, SelectOne } from '../../components';

// context
// import { AuthContext } from '../../context/AuthContext';

// utils
import allSkillsData from '../../data/allSkillsData.json';

const SearchBar = () => {
  const [projects, setProjects] = useState([]);
  const [joinSuccess, setJoinSuccess] = useState(false);

  const [joinVacancy] = useMutation(JOIN_VACANCY, {
    update(_, { data }) {
      console.log('Vacancy', data);
    },
  });

  const [getProjects, { loading }] = useLazyQuery(GET_PROJECTS, {
    onCompleted: (data) => {
      setProjects(data.projects);
    },
  });

  useEffect(() => {
    getProjects({ variables: { skill: '' } });
  }, [getProjects]);

  const {
    handleSubmit,
    values,
    errors,
    touched,
    resetForm,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    initialValues: {
      skill: '',
    },
    onSubmit: async ({ skill: { value } }) => {
      if (!value) {
        value = '';
      }
      await getProjects({ variables: { skill: value } });
    },
  });
  const { skill } = values;

  const handleJoin = async (vacancyId) => {
    await joinVacancy({ variables: { vacancyId } });
    await setJoinSuccess(true);
  };

  if (joinSuccess) {
    return <Redirect push to="/joined-projects" />;
  }

  if (loading || !projects) return <p>Loading...</p>;
  return (
    <Fragment>
      <div className="pt-5 w-full px-4 md:px-12">
        <form class="w-full" onSubmit={handleSubmit}>
          <div class="flex items-center py-2">
            <div className="w-full">
              <SelectOne
                options={allSkillsData}
                value={skill}
                field={'skill'}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.skill}
                touched={touched.skill}
              />
            </div>
            <p className="text-red-500 text-xs italic">{errors.skill}</p>
            <button
              className="mr-2 flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Search
            </button>
            <button
              className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
              onClick={() => resetForm()}
            >
              Clear Search
            </button>
          </div>
        </form>
      </div>

      <div className="container my-2 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {projects.map((project) => (
            <div
              key={project._id}
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3  "
            >
              <CardProject project={project} handleJoin={handleJoin} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default SearchBar;
