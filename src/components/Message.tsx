import { FunctionComponent } from "react";

// if statement
interface MessageProps {
  isAdmin: boolean;
}

const Message: FunctionComponent<MessageProps> = ({ isAdmin }) => {
  if (isAdmin) {
    return (
      <>
        <h1>Welcome back admin</h1>
        <button>Add Products</button>
      </>
    );
  }
  return (
    <>
      <h1>Welcome back user</h1>
      <button>Show Products</button>
    </>
  );
};

export default Message;
