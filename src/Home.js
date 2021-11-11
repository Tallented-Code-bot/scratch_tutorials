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
    async function retrieveData() {
      const json = await fetch("http://192.168.212.52:8080/api/tutorials/all/");
      const data = await json.json();
      setTutorials(data);
      console.log("Got json from response");
    }
    retrieveData();
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
