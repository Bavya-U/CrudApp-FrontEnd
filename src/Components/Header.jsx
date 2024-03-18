import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-700 text-gray-300 px-6 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <h1 className="text-3xl font-bold">CRUD-APP</h1>
        </Link>
        <nav className="space-x-6 text-2xl font-semibold">
          <Link to={"/githubcode"} className="hover:text-white text-xl">
            GitHub Code
          </Link>
          <Link to={"/add"} className="hover:text-white">
            add User
          </Link>
          <Link to={"/all"} className="hover:text-white">
            all User
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;