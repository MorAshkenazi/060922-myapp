import { FunctionComponent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

interface UserDetailsProps {}

const UserDetails: FunctionComponent<UserDetailsProps> = () => {
  // הוק שהתפקיד שלו לקחת פרמטרים מה-url
  let { id } = useParams();
  let [user] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  // הוק שהתפקיד שלו לעשות ניתוב דרך הקוד
  let navigate = useNavigate();
  return (
    <>
      <h3>User {id} Details</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <button
        className="btn btn-secondary"
        onClick={() => {
          console.log("Home clicked");
          navigate("/");
        }}
      >
        Home
      </button>
      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
};

export default UserDetails;
