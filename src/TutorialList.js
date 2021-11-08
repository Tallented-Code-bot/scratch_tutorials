const TutorialList = (props) => {
  const tutorials = props.tutorials;
  const title = props.title;
  return (
    <div className="article_list">
      <h1>{title}</h1>
      {tutorials.map((tutorial) => (
        <div className="tutorial_preview" key={tutorial.id}>
          <h2> {tutorial.title} </h2>
          <p>By {tutorial.author}</p>
        </div>
      ))}
    </div>
  );
};

export default TutorialList;
