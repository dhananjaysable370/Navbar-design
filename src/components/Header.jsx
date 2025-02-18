import { useState } from "react";
import catimg from "../assets/cat.jpg";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        <Link to="/Navbar-design" className="flex items-center gap-3">
          <img src={catimg} alt="Cat" className="w-14 h-14" />
          <h1 className="text-3xl font-bold">Meow</h1>
        </Link>

        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav
          className={`absolute md:relative sm:top-0 top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none transition-all md:flex md:items-center md:gap-8 p-6 md:p-0 rounded-md md:rounded-none z-40 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex items-center justify-center flex-col md:flex-row gap-6 text-lg font-semibold text-center">
            <Link
              to="/Navbar-design/overview"
              className="hover:text-blue-600 transition-all px-4"
            >
              <li>Overview</li>
            </Link>
            <Link
              to="/Navbar-design/whycats"
              className="hover:text-blue-600 transition-all px-4"
            >
              <li>Why Cats?</li>
            </Link>
            <Link
              to="/Navbar-design/diet"
              className="hover:text-blue-600 transition-all px-4"
            >
              <li>Diet</li>
            </Link>
            <Link
              to="/Navbar-design/adopt"
              className="border-2 border-blue-400 text-blue-500 rounded-lg px-6 py-2 hover:bg-blue-700 hover:text-white transition-all font-semibold"
            >
              Adopt Meow
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
