import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/users">Users</NavLink>
    </nav>
  );
};

export default Navbar;

{
  /* <nav>
<a
  style={{ color: "red", backgroundColor: "orange", fontSize: "20px" }}
  href="/"
>
  Home
</a>
<a className="text-warning bg-dark" href="/contacts">
  Contacts
</a>
</nav> */
}
