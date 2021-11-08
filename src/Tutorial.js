import { useParams } from "react-router-dom";

const Tutorial = () => {
  const { id } = useParams();

  return (
    <div className="tutorial">
      <h1>Tutorial - {id}</h1>
    </div>
  );
};

export default Tutorial;
