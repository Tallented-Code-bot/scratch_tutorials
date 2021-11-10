import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./tutorial.css";

const Tutorial = () => {
  const { id } = useParams();
  const [tutorial, setTutorial] = useState(null);

  useEffect(() => {
    fetch(`http://192.168.212.52:8080/api/tutorials/${id}`)
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
        <ReactMarkdown>{tutorial[0].body.replace(/\\n/gi, "\n")}</ReactMarkdown>
      )}
    </div>
  );
};

export default Tutorial;
