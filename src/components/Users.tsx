import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface UsersProps {}

const Users: FunctionComponent<UsersProps> = () => {
  let [num, setNum] = useState<number>(0);
  let [users, setUsers] = useState<any>([]);
  // הרצה חד פעמית
  useEffect(() => {
    // console.log("users component");
    // fetch request to get all users from jsonplaceholder
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // הרצה רב פעמית, תלויה בנאמ
  useEffect(() => {
    console.log("num changed");
  }, [num]);

  return (
    <>
      {/* <button onClick={() => setNum(num + 1)}>Add</button>
      <p>{num}</p> */}
      {/* show in list all the users names */}
      {users.length ? (
        <table style={{ margin: "auto" }}>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any) => (
              <tr key={user.id}>
                <td>
                  <Link to={`/users/${user.id}`}>{user.id}</Link>
                </td>
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users</p>
      )}
    </>
  );
};

export default Users;
