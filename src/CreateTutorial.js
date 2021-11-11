import React from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

const CreateTutorial = () => {
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const tutorial = { body: markdown, author: "Calvin", title: title };

    const response = await fetch("http://192.168.212.52:8080/api/tutorials/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tutorial),
    });
    const data = await response.json();
    console.log(data);
    alert("New tutorial added successfully");
  }

  return (
    <div>
      <h1>Create a tutorial</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          required=""
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          id="markdown"
          name=""
          cols="60"
          rows="10"
          required
          placeholder="Type here"
          value={markdown}
          onChange={(e) => {
            setMarkdown(e.target.value);
          }}
        ></textarea>
        <input type="submit" value="Submit" />
      </form>

      <h3>Preview</h3>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default CreateTutorial;
