import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png"; // Replace with your logo path

function Header({ onToggleSidebar, isSidebarOpen }) {
  return (
    <header className="bg-gray-800 shadow-md py-3 px-6 flex justify-between items-center">


      <div className="flex items-center space-x-4">
        {/* Hamburger */}
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-md hover:bg-white/20 focus:outline-none transition"
        >
          {isSidebarOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>

        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Logo" className="h-10 w-10 object-contain" />
          <h1 className="text-white text-2xl font-bold">
            EMR Integration Prototype
          </h1>
        </div>
      </div>

      {/* Optional right side controls */}
      <div className="flex items-center space-x-4">
        <button className="text-white px-3 py-1 rounded-md hover:bg-white/20 transition">
          Login
        </button>
        <button className="text-white px-3 py-1 rounded-md hover:bg-white/20 transition">
          Help
        </button>
      </div>
    </header>
  );
}

export default Header;
