import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "./Markdown";
import "./tutorial.css";

const Tutorial = () => {
  const { id } = useParams();
  const [tutorial, setTutorial] = useState(null);

  useEffect(() => {
    fetch(`http://${window.location.hostname}:3390/api/tutorials/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTutorial(data);
      });
  }, []);

  return (
    <div className="tutorial">
      {tutorial && <h1>{tutorial[0].title}</h1>}
      {tutorial && <h3>By {tutorial[0].author}</h3>}
      {tutorial && (
        <Markdown>{tutorial[0].body.replace(/\\n/gi, "\n")}</Markdown>
      )}
    </div>
  );
};

export default Tutorial;
