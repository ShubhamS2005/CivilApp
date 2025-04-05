// import React, { useState } from "react";
// import ProductList from "../components/ProductList";
// import SearchBar from "../components/SearchBar";

// const Materials = () => {
//   const [search, setSearch] = useState("");

//   return (
//     <div className="container mx-auto p-6">
//       <div className="text-center my-6">
//         <h1 className="text-4xl font-bold text-primary">Construction Materials</h1>
//         <p className="text-lg text-gray-600 mt-2">Browse through all available materials</p>
//       </div>

//       <SearchBar search={search} setSearch={setSearch} />
//       <ProductList search={search} />
//     </div>
//   );
// };

// export default Materials;


import React, { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import ProductList from "../components/ProductList.jsx"; 

const Materials=()=> {
  const [search, setSearch] = useState("");

  return (
    <div className="container mx-auto p-6">
      <div className="text-center my-6">
        <h1 className="text-4xl font-bold text-primary">Construction Materials</h1>
        <p className="text-lg text-gray-600 mt-2">Browse through all available materials</p>
      </div>

      <SearchBar search={search} setSearch={setSearch} />
      <ProductList search={search} />
    </div>
  );
}

export default Materials;
