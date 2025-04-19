// import React from "react";

// const SearchBar = ({ search, setSearch }) => {
//   return (
//     <div className="p-4">
//       <input
//         type="text"
//         placeholder="Search materials..."
//         className="p-2 border rounded w-full"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//     </div>
//   );
// };

// export default SearchBar;


const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        className="w-[92vw] ml-7 p-2  rounded-lg border border-gray-300 active:outline-2"
        placeholder="Search materials..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
