import { FunctionComponent, useState } from "react";

interface DetailsProps {}

const Details: FunctionComponent<DetailsProps> = () => {
  //   let username: string = "Mor";
  let [username, setUsername] = useState<string>("");
  let [num, setNum] = useState<number>(5);
  let printUsername = (input: string) => {
    setUsername(input);
    setNum(input.length);
  };

  return (
    <>
      <label htmlFor="username">Enter your username:</label>
      <input
        type="text"
        id="username"
        onChange={(e) => printUsername(e.target.value)}
      />
      <p>{username}</p>
      <p>{num}</p>
    </>
  );
};

export default Details;
