import { FunctionComponent } from "react";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  let welcomeMsg = () => console.log("Welcome Mor");

  let welcomeMsgWithName = (username: string) =>
    console.log(`Welcome ${username}`);

  return (
    <>
      <h1>Home page</h1>
      {/* function without arguments */}
      <button className="btn btn-primary" onClick={welcomeMsg}>
        Welcome
      </button>
      {/* function with arguments */}
      <button
        className="btn btn-primary"
        onClick={() => welcomeMsgWithName("Yossi")}
      >
        Welcome with name
      </button>
    </>
  );
};

export default Home;
