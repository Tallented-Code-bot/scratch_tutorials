import React from "react";
import "./markdownTutorial.css";
import MarkdownExample from "./MarkdownExample";

const MarkdownTutorial = () => {
  return (
    <div className="tutorial">
      <h1>Markdown Tutorial</h1>
      <h2>Headings</h2>
      There are 6 sizes of markdown headings. To write a markdown heading, you
      use <code>#</code> to <code>######</code>,<code>#</code> being the largest
      and <code>######</code> being the smallest.
      <br />
      <br />
      <MarkdownExample>
        {`# This is a big heading
### This is a medium heading
###### This is a small heading`}
      </MarkdownExample>
      <p>
        Make sure to add a space after the last <code>#</code> character, or it
        may not display properly.
      </p>
      <h2>Paragraphs</h2>
      <p>To display a paragraph in markdown, just type what you want to say.</p>
      <MarkdownExample>{`
This is a paragraph.  I can keep typing,
break
lines,
and type as long lines as I want, since it will automatically break the lines if they get too long.
      `}</MarkdownExample>
    </div>
  );
};

export default MarkdownTutorial;
