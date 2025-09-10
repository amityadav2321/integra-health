import { useState } from "react";
function SearchBox({ code, setCode, onSearch }) {
  return (
    <div>
      <label className="block mb-2 text-lg font-semibold">
        Enter NAM Code or ICD Code
      </label>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="e.g., NAM-002 or 5A11"
        className="w-full p-2 border rounded-lg mb-4"git init

      />
      <button
        onClick={onSearch}
        className="w-full bg-blue-500 shadow-md text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBox;

