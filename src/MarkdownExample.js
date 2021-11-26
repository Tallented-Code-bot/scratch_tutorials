import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Markdown from "./Markdown";

const MarkdownExample = ({ children }) => {
  const [content, setContent] = useState(children);

  return (
    <div className="example">
      <textarea
        className="markdown"
        onInput={(e) => {
          setContent(e.target.value);
        }}
        value={content}
      ></textarea>
      <Markdown>{content}</Markdown>
    </div>
  );
};

MarkdownExample.propTypes = {
  children: PropTypes.string,
};

export default MarkdownExample;
