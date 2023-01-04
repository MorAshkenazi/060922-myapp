import { FunctionComponent } from "react";

// ternary if
interface Message3Props {
  isAdmin: boolean;
}

const Message3: FunctionComponent<Message3Props> = ({ isAdmin }) => {
  return (
    <>
      {isAdmin ? (
        <>
          <h1>Welcome back admin</h1> <button>Add Products</button>
        </>
      ) : (
        <>
          <h1>Welcome back user</h1> <button>Show Products</button>
        </>
      )}
    </>
  );
};

export default Message3;
