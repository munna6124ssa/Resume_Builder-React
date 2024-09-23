import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between px-9 py-2 items-center fixed w-full">
        <div className="w-52">
          <img src="./logo.png" alt="Logo" />
        </div>
        <div className="flex gap-24 list-none  text-lg mr-9 items-center text-bold">
          <Link to="./ResumeTemplate"> Resume</Link>
          <li>Cover Letter</li>
          <li>Sign In</li>
          <button className="text-blue-600 border border-3 border-blue-600 py-1 px-4 ">
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
};
export default Nav;
