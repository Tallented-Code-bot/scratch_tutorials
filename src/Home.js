import React from "react";
import { useState } from "react";
import TutorialList from "./TutorialList";
import PropTypes from "prop-types";

const Home = () => {
  const [tutorials] = useState([
    {
      title: "Test number 1",
      body: "This is a test",
      author: "griffpatch",
      id: 1,
    },
    {
      title: "Test number 2",
      body: "This is another test",
      author: "will_wam",
      id: 2,
    },
  ]);
  return (
    <div className="home">
      <TutorialList tutorials={tutorials} title={"All tutorials"} />
    </div>
  );
};

Home.propTypes = {
  title: PropTypes.string,
};
export default Home;
