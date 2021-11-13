import React from "react";
import { useState, useEffect } from "react";
import TutorialList from "./TutorialList";
import PropTypes from "prop-types";

const Home = () => {
  const [tutorials, setTutorials] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function retrieveData() {
      const json = await fetch(
        `http://${window.location.hostname}:3390/api/tutorials/all/`
      );
      const data = await json.json();
      setTutorials(data);
      setIsLoading(false);
      console.log("Got json from response");
    }
    retrieveData();
  }, []);

  return (
    <div className="home">
      {isLoading && <div>Loading... </div>}
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
