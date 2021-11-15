import React from "react";
import useQueryString from "./hooks/useQueryString";
import Searchbar from "./Searchbar";

const Explore = () => {
  const [search, setSearch] = useQueryString("search");

  return (
    <div className="explore">
      <h1>Explore</h1>
      <Searchbar setSearch={setSearch} />
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <p>{search}</p>
    </div>
  );
};

export default Explore;
