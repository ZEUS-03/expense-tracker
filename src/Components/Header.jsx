import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between px-3 py-6 font-medium bg-blue-300 bg-opacity-50">
      <Link to={"/"}>
        <h1 className="ml-5">Expense Tracker Application</h1>
      </Link>
      <ul className="flex mr-5">
        <Link to={""}>
          <li className="mx-2">Create new expense</li>
        </Link>
        <li className="mx-2">
          <Link to={"expenses"}>Manage expenses</Link>
        </li>
        <li className="mx-2">
          <Link to={"track"}>Expenses graph</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
