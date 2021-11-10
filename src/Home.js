import React from "react";
import { useState, useEffect } from "react";
import TutorialList from "./TutorialList";
import PropTypes from "prop-types";

const Home = () => {
  const [tutorials, setTutorials] = useState(
    /*[
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
  ]
  */
    null
  );

  useEffect(() => {
    fetch("http://192.168.212.52:8080/api/tutorials/all/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTutorials(data);
      });
  }, []);

  return (
    <div className="home">
      {console.log(tutorials)}
      {tutorials && (
        <TutorialList tutorials={tutorials} title={"All tutorials"} />
      )}
    </div>
  );
};

Home.propTypes = {
  title: PropTypes.string,
};
export default Home;
