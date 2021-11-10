import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const TutorialList = (props) => {
  const tutorials = props.tutorials;
  const title = props.title;
  return (
    <div className="article_list">
      <h1>{title}</h1>
      {tutorials.map((tutorial) => (
        <div className="tutorial_preview" key={tutorial.id}>
          <Link to={`/tutorials/${tutorial._id}`}>
            <h2> {tutorial.title} </h2>
            <p>By {tutorial.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

TutorialList.propTypes = {
  title: PropTypes.string,
  tutorials: PropTypes.array,
};

export default TutorialList;
