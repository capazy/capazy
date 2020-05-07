import React from 'react';
import { useFormik } from 'formik';
// import * as Yup from 'yup';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_PROJECT } from '../../graphql/mutation/user';
// import { Select } from '../../components';

// const options = [
//   {
//     id: 0,
//     category: { value: 'Web Ti', label: 'Web TI' },
//     skills: [
//       { value: 'react1', label: 'react1' },
//       { value: 'react2', label: 'react2' },
//       { value: 'react3', label: 'react3' },
//       { value: 'react4', label: 'react4' },
//     ],
//   },
//   {
//     id: 1,
//     category: { value: 'Financial', label: 'Financial' },
//     skills: [
//       { value: 'angular1', label: 'angular1' },
//       { value: 'angular2', label: 'angular2' },
//       { value: 'angular3', label: 'angular3' },
//       { value: 'angular4', label: 'angular4' },
//     ],
//   },
// ];

const projectTypes = ['One-Time', 'Ongoing', 'Complex'];
const projectPublished = ['Department', 'Company', 'Globally'];

// title: "Test",
// description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
// type: "One-time",
// deadline: "2020-05-07T03:32:53.989Z"
// published: "globally"

const ProjectForm = () => {
  const [createProject] = useMutation(CREATE_PROJECT);

  // const [skillData, setSkillData] = useState();

  const {
    handleSubmit,
    values,
    errors,
    touched,
    // setFieldTouched,
    // setFieldValue,
    handleChange,
  } = useFormik({
    initialValues: {
      title: '',
      description: '',
      type: '',
      published: '',
      deadline: '',
      // skills: [],
    },
    // validationSchema: prijecrFormSchema
    onSubmit: (values, { resetForm }) => {
      // let modifySkills = [];
      // values.skills.map((skill) => {
      //   return modifySkills.push(skill.value);
      // });
      // values.skills = modifySkills;
      // const formData = { skills: modifySkills };
      // userInput({ variables: formData });
      // resetForm();
      values.deadline = new Date(values.deadline).toISOString();
      createProject({ variables: values });
      resetForm();
    },
  });

  const { title, description, deadline } = values;

  // const handleSkills = (e) => {
  //   const { skills } = options.find(
  //     (item) => item.category.value === e.target.value
  //   );
  //   setSkillData(skills);
  // };

  return (
    <div className="pt-5 w-full max-w-md mx-auto my-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Title"
            onChange={handleChange}
            value={title}
            invalid={touched.title && errors.title ? true : undefined}
          />
          <p className="text-red-500 text-xs italic">{errors.title}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            cols="10"
            placeholder="Project description..."
            onChange={handleChange}
            value={description}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            invalid={
              touched.description && errors.description ? true : undefined
            }
          ></textarea>
          <p className="text-red-500 text-xs italic">{errors.description}</p>
        </div>

        <div className="mb-4">
          <select
            id="type"
            name="type"
            onChange={handleChange}
            defaultValue="Type"
          >
            <option value="Type" disabled>
              Type
            </option>
            {projectTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <p className="text-red-500 text-xs italic">{errors.type}</p>

        <div className="mb-4">
          <select
            id="published"
            name="published"
            onChange={handleChange}
            defaultValue="Published"
          >
            <option value="Published" disabled>
              Published
            </option>
            {projectPublished.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <p className="text-red-500 text-xs italic">{errors.published}</p>

        <div className="mb-4">
          <input
            type="date"
            id="deadline"
            name="deadline"
            onChange={handleChange}
            value={deadline}
          />
        </div>
        <p className="text-red-500 text-xs italic">{errors.deadline}</p>

        {/* <div className="w-full ">
          <Select
            options={skillData}
            value={skills}
            field={'skills'}
            isMulti={true}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            error={errors.skills}
            touched={touched.skills}
          />
        </div> */}

        <div className="flex items-center justify-between">
          <button className="btn bg-brand-blue text-white mb-0" type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
