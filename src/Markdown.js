import React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import scratchblocks from "scratchblocks";

const Markdown = (props) => {
  useEffect(() => {
    scratchblocks.renderMatching("code.blocks");
    scratchblocks.renderMatching("code.b", {
      inline: true,
    });
  }, [props.children]);

  return (
    <ReactMarkdown
      components={{
        code: (prop) => {
          if (prop.inline)
            return (
              <code inline="true" className="b">
                {prop.children}
              </code>
            );
          return (
            <code inline="false" className="blocks">
              {prop.children}
            </code>
          );
        },
      }}
    >
      {props.children}
    </ReactMarkdown>
  );
};

Markdown.propTypes = {
  children: PropTypes.string,
};

export default Markdown;
