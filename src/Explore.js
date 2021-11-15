import React from "react";
//import { useState, useEffect } from "react";
import TutorialList from "./TutorialList";
import /*useLocation /*useHistory */ "react-router-dom";
import PropTypes from "prop-types";

//const Searchpage = () => {
////const history = useHistory();
//const [tutorials [>setTutorials<]] = useState(null);
//const [isLoading [>setIsLoading<]] = useState(true);
////const params = useLocation().search;
////const search = new URLSearchParams(params).get("search");

////async function getData() {
////const json = await fetch(
////`http://${window.location.hostname}:3390/api/tutorials/search?search=${search}`
////);
////const data = await json.json();
////console.log(data);
////setTutorials(data);
////setIsLoading(false);
////}

////setTutorials(null);
////null
////setIsLoading(true);
////console.log(search);

////useEffect(
////[>async<] () => {
////console.log("hello from the search page");
//////setIsLoading(true);
//////setTutorials(null);
//////await getData();
//////history.listen((location) => {
//////console.log(`You changed the page to: ${location.pathname}`);
//////});
////},
////[]
////);

//useEffect(() => {
//console.log("hello from the search page");
//}, []);

//return (
//<div className="search">
//{isLoading && <div>Loading... </div>}
//{tutorials && <TutorialList title="Search" tutorials={tutorials} />}
//</div>
//);
//};

export default class Searchpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      tutorials: [
        {
          title: "Testing",
          author: "Calvin",
          body: "Hello world",
          _id: 1235478,
        },
      ],
    };
    console.log("hello world");
  }

  static get propTypes() {
    return {
      location: PropTypes.any,
    };
  }
  //componentDidUpdate(prevProps, prevState, snapshot) {
  //if (this.props.location.search !== prevProps.location.search) {
  ////do something
  //}
  //}

  componentDidUpdate(prevProps) {
    console.log("do");
    if (this.props.location !== prevProps.location) {
      console.log("do something");
      //do something
    }
  }

  render() {
    return (
      <div className="searchpage">
        {this.state.isLoading && <div>Loading... </div>}
        {this.state.tutorials && (
          <TutorialList title="Search" tutorials={this.state.tutorials} />
        )}
      </div>
    );
  }
}
