import React from "react";
import { useEffect, useState } from "react";
import useQueryString from "./hooks/useQueryString";
import Searchbar from "./Searchbar";
import TutorialList from "./TutorialList";

const Explore = () => {
  const [search, setSearch] = useQueryString("search");
  const [tutorials, setTutorials] = useState(null);

  const fetchData = async function () {
    const data = await fetch(
      `http://${window.location.hostname}:3390/api/tutorials/search?search=${search}`
    );
    const json = await data.json();
    setTutorials(json);
    console.log(tutorials);
  };

  useEffect(() => {
    console.log("This is the useeffect");
    console.log(search);
    fetchData();
  }, [search]);

  return (
    <div className="explore">
      <h1>Explore</h1>
      <Searchbar setSearch={setSearch} />
      {tutorials && <TutorialList title={search} tutorials={tutorials} />}
    </div>
  );
};

export default Explore;
