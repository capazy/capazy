import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECTS } from '../../graphql/queries/project';

// const projects = [
//   {
//     id: 1,
//     title: 'Project 1 Title',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur voluptatum fugit aperiam ipsum modi, magni suscipit architecto earum sequi laboriosam nesciunt rem, dolorum ut porro quas, numquam blanditiis sapiente? Totam tenetur, enim laboriosam eum hic dignissimos ipsum cupiditate alias expedita suscipit necessitatibus pariatur molestiae quisquam? Veniam dicta fugiat expedita tempore?',
//     type: 'One-Time',
//     deadline: new Date().toISOString(),
//     published: 'Globally',
//     isOpen: true,
//     creator: 'Pepito Perez',
//     vacancies: [0, 1, 2, 3, 4],
//   },
//   {
//     id: 2,
//     title: 'Project 1 Title',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur voluptatum fugit aperiam ipsum modi, magni suscipit architecto earum sequi laboriosam nesciunt rem, dolorum ut porro quas, numquam blanditiis sapiente? Totam tenetur, enim laboriosam eum hic dignissimos ipsum cupiditate alias expedita suscipit necessitatibus pariatur molestiae quisquam? Veniam dicta fugiat expedita tempore?',
//     type: 'One-Time',
//     deadline: new Date().toISOString(),
//     published: 'Globally',
//     isOpen: true,
//     creator: 'Pepito Perez',
//     vacancies: [0, 1, 2, 3, 4],
//   },
//   {
//     id: 3,
//     title: 'Project 1 Title',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur voluptatum fugit aperiam ipsum modi, magni suscipit architecto earum sequi laboriosam nesciunt rem, dolorum ut porro quas, numquam blanditiis sapiente? Totam tenetur, enim laboriosam eum hic dignissimos ipsum cupiditate alias expedita suscipit necessitatibus pariatur molestiae quisquam? Veniam dicta fugiat expedita tempore?',
//     type: 'One-Time',
//     deadline: new Date().toISOString(),
//     published: 'Globally',
//     isOpen: true,
//     creator: 'Pepito Perez',
//     vacancies: [0, 1, 2, 3, 4],
//   },
// ];

const Feed = () => {
  const { loading, data } = useQuery(GET_PROJECTS);
  if (loading) return <p>Loading...</p>;
  const projects = data.projects;

  return (
    <Fragment>
      <div className="py-16">
        {projects.map((project) => (
          <div
            className="container w-full flex flex-wrap mx-auto px-2 lg:pt-2"
            key={project._id}
          >
            <div className="w-full p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded">
              <div className="font-sans">
                <h1 className="font-sans break-normal text-gray-900 py-2 text-xl">
                  {project.title} | {project._id}
                </h1>
                <hr className="border-b border-gray-400" />
              </div>
              <p className="py-6">{project.description}</p>
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th>Type</th>
                    <th>Deadline</th>
                    <th>Published</th>
                    <th>Vacancies</th>
                    <th>Creator</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{project.type}</td>
                    <td>{project.deadline}</td>
                    <td>{project.published}</td>
                    <td>{project.vacancies.length}</td>
                    <td>{project.creator._id}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Feed;
