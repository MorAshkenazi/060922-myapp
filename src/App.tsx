import "./App.css";
import Albums from "./components/Albums";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Message from "./components/Message";
import Message2 from "./components/Message2";
import Message3 from "./components/Message3";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Products from "./components/Products";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let name: string = "Mor Ashkenazi";
  let year: string = "2022";
  let title: string = "Hello from React App";
  let num: number = 6;
  let imgUrl: string =
    "https://images.ctfassets.net/81iqaqpfd8fy/3r4flvP8Z26WmkMwAEWEco/870554ed7577541c5f3bc04942a47b95/78745131.jpg?w=1200&h=1200&fm=jpg&fit=fill";
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar />
        </header>
        {/* תצוגה מתחלפת */}
        <Routes>
          {/* localhost:3000/ */}
          <Route path="/" element={<Home />} />
          {/* localhost:3000/products */}
          <Route path="/products" element={<Products />} />
          {/* localhost:3000/users */}
          <Route path="/users">
            <Route index element={<Users />} />
            <Route path=":id" element={<UserDetails />} />
            {/* <Route path="new" element={<NewUser />} /> */}
          </Route>
        </Routes>
        <footer>
          <Footer devName={name} devYear={year} />
        </footer>
      </Router>
    </div>
  );
}

export default App;

// שיעורים 1-3
{
  /* <Navbar />
      <Details />
      <Home />
      <Message isAdmin={true} />
      <Message isAdmin={false} />
      <Message2 isAdmin={true} />
      <Message2 isAdmin={false} />
      <Message3 isAdmin={true} />
      <Message3 isAdmin={false} />
      <Products />
      <Users />
      <Albums />
      <Posts /> */
}
{
  /* <h1>{title}</h1>
      <p>You entered {num + 4} times</p>
      <p>{Math.random() * 100}</p>
      <img src={imgUrl} alt="cute giraffe" /> */
}
{
  /* <Footer devName={name} devYear={year} /> */
}
