function Sidebar({ isOpen, onToggleSidebar }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      {/* Header inside sidebar */}
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h2 className="text-lg font-bold">Menu</h2>
        {/* Hamburger / Close button inside sidebar */}
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-md hover:bg-gray-700"
        >
          {/* X icon */}
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
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Menu items */}
      <ul className="p-4 space-y-4">
        <li className="hover:bg-gray-700 p-2 rounded">Home</li>
        <li className="hover:bg-gray-700 p-2 rounded">About</li>
        <li className="hover:bg-gray-700 p-2 rounded">Services</li>
        <li className="hover:bg-gray-700 p-2 rounded">Contact</li>
      </ul>
    </div>
  );
}

export default Sidebar;
