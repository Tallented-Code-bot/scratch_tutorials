import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
//import { useHistory } from "react-router-dom";
//import useQueryString from "./hooks/useQueryString";

const Searchbar = (props) => {
  const [searchText, setSearchText] = useState("");
  //const history = useHistory();
  //const [search, setSearch] = useQueryString("search");

  async function handleSubmit(e) {
    e.preventDefault();
    props.setSearch(searchText);
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

Searchbar.propTypes = {
  setSearch: PropTypes.func,
};
