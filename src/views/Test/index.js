import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_USERS = gql`
  {
    projects {
      _id
    }
  }
`;

const Test = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <div>
      <p>{console.log(data)}</p>
      <p>{console.log(data)}</p>
    </div>
  );
};

export default Test;
