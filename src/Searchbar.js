import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("hi");
    history.push(`/tutorials/search?search=${searchText}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search here"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
    </form>
  );
};

export default Searchbar;
