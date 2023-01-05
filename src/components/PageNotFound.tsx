import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface PageNotFoundProps {}

const PageNotFound: FunctionComponent<PageNotFoundProps> = () => {
  let navigate = useNavigate();
  return (
    <>
      <h3>404 - Page not found</h3>
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
};

export default PageNotFound;
