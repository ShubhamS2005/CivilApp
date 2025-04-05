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
        className="w-full p-2 border rounded"
        placeholder="Search materials..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
