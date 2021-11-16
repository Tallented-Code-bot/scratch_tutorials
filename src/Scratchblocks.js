import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import scratchblocks from "scratchblocks";

const Scratchblocks = (props) => {
  useEffect(() => {
    scratchblocks.renderMatching("pre.blocks", {
      style: "scratch3",
    });
  }, [props.children]);

  return <pre className="blocks">{props.children}</pre>;
};

Scratchblocks.propTypes = {
  code: PropTypes.string,
  inline: PropTypes.bool,
  children: PropTypes.string,
};

export default Scratchblocks;
