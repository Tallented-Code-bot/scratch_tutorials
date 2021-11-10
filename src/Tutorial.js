import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Tutorial = () => {
  const { id } = useParams();
  const [tutorial, setTutorial] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/tutorials/${id}`)
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
      {tutorial && <p>{tutorial[0].body}</p>}
    </div>
  );
};

export default Tutorial;
