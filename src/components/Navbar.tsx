import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/employees">Employees</NavLink>
      <NavLink to="/organization">Organization</NavLink>
    </nav>
  );
}