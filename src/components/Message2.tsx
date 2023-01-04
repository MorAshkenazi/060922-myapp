import { FunctionComponent } from "react";

// && operator
interface Message2Props {
  isAdmin: boolean;
}

const Message2: FunctionComponent<Message2Props> = ({ isAdmin }) => {
  return (
    <>
      {isAdmin && (
        <>
          <h1>Welcome back admin</h1> <button>Add Products</button>
        </>
      )}
      {!isAdmin && (
        <>
          <h1>Welcome back user</h1> <button>Show Products</button>
        </>
      )}
    </>
  );
};

export default Message2;
