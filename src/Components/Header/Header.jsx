import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Header = () => {
          return (
          <div>
          <div className="">
          <header>
          <div className="navbar bg-base-100 lg:px-56">
          <div className="navbar-start">
          <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          >
          <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h8m-8 6h16"
          />
          </svg>
          </label>
          <ul
          tabIndex="0"
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
          <li>
          <a>Home</a>
          </li>
          <li>
          <a>services</a>
          <ul className="p-2">
          <li>
          <a>About Us</a>
          </li>
          <li>
          <a>Submenu 2</a>
          </li>
          </ul>
          </li>
          <li>
          <a>Our Doctors</a>
          </li>
          <li>
          <a>Contact</a>
          </li>
          </ul>
          </div>
          <a className="font-black normal-case text-2xl font-kodchasan">
           Nobojatok
          </a>
          </div>
          <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
          <li>
          <a href="/index.html">Home</a>
          </li>
          <li tabIndex="0">
          <details>
          <summary>services</summary>
          <ul className="p-2">
          <li>
          <a>Submenu 1</a>
          </li>
          <li>
          <a>Submenu 2</a>
          </li>
          </ul>
          </details>
          </li>
          <li>
          <a href="ourdoctors.html">Our Doctors</a>
          </li>
          <li>
          <a href="features.html">Features</a>
          </li>
          </ul>
          </div>
          <div className="navbar-end">
          <a href="login.html" className="btn bg-violet-500 text-white rounded-full h-1">
          login
          </a>
          </div>
          </div>
          </header>
          </div>

           <div>
          <Outlet></Outlet>
          </div>
          <Footer></Footer>                   
          </div>
          );
};

export default Header;