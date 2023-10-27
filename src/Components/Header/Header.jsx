import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Header = () => {

          const links = 
          <>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/doctors">Our Doctors</NavLink></li>
          <li><NavLink to="/features">Features</NavLink></li>
          </>
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
          {links}
          </ul>
          </div>
          <a className="font-black normal-case text-2xl font-kodchasan">
           Nobojatok
          </a>
          </div>
          <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
          {links}
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

          <div className="min-h-[60vh]">
          <Outlet></Outlet>
          </div>
          <Footer></Footer>                   
          </div>
          );
};

export default Header;