// import React from "react";
// import ProductCard from "./ProductCard";
// import cementImg from "../assets/images/cement.jpg";
// import rodImg from "../assets/images/rod.jpg";
// import sandImg from "../assets/images/sand.jpg";
// import bricksImg from "../assets/images/bricks.jpg";

// const products = [
//   { id: 1, name: "Cement", price: 350, image: cementImg },
//   { id: 2, name: "Rod", price: 550, image: rodImg },
//   { id: 3, name: "Sand", price: 250, image: sandImg },
//   { id: 4, name: "Bricks", price: 7, image: bricksImg },
// ];

// const ProductList = ({ search }) => {
//   // ✅ Filter products based on search query
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
//       {filteredProducts.length > 0 ? (
//         filteredProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))
//       ) : (
//         <p className="text-center col-span-4 text-gray-500">No products found.</p>
//       )}
//     </div>
//   );
// };

// export default ProductList;

import React from "react";
import ProductCard from "./ProductCard";

// Import images for materials (replace with actual images)
import cementImg from "../assets/images/cement.jpg";
import sandImg from "../assets/images/sand.jpg";
import steelImg from "../assets/images/steel.jpg";
import bitumenImg from "../assets/images/bitumen.jpg";
// import concreteImg from "../assets/images/concrete.jpg";
// import structuralSteelImg from "../assets/images/structuralSteel.jpg";
// import bindingWireImg from "../assets/images/bindingWire.jpg";
// import flyAshImg from "../assets/images/flyAsh.jpg";
// import aggregatesImg from "../assets/images/aggregates.jpg";
// import bricksImg from "../assets/images/bricks.jpg";
// import blockImg from "../assets/images/block.jpg";
// import timberImg from "../assets/images/timber.jpg";
// import nailsImg from "../assets/images/nails.jpg";
// import limeImg from "../assets/images/lime.jpg";
// import paintImg from "../assets/images/paint.jpg";
// import bambooImg from "../assets/images/bamboo.jpg";
// import glassImg from "../assets/images/glass.jpg";
// import pipesImg from "../assets/images/pipes.jpg";
// import tileImg from "../assets/images/tile.jpg";
// import marbleImg from "../assets/images/marble.jpg";
// import mudImg from "../assets/images/mud.jpg";
// import metalSheetImg from "../assets/images/metalSheet.jpg";
// import tarImg from "../assets/images/tar.jpg";
// import chipboardImg from "../assets/images/chipboard.jpg";
// import waterImg from "../assets/images/water.jpg";
// import ropeImg from "../assets/images/rope.jpg";
// import stoneImg from "../assets/images/stone.jpg";
// import greenCementImg from "../assets/images/greenCement.jpg";
// import soilImg from "../assets/images/soil.jpg";
// import graniteImg from "../assets/images/granite.jpg";
// import primerImg from "../assets/images/primer.jpg";
// import strawImg from "../assets/images/straw.jpg";
// import asphaltImg from "../assets/images/asphalt.jpg";
// import ironImg from "../assets/images/iron.jpg";
// import whiteCementImg from "../assets/images/whiteCement.jpg";
// import aluminumImg from "../assets/images/aluminum.jpg";
// import rubberImg from "../assets/images/rubber.jpg";
// import alloyImg from "../assets/images/alloy.jpg";
// import gypsumBoardImg from "../assets/images/gypsumBoard.jpg";
// import gypsumImg from "../assets/images/gypsum.jpg";
// import ceramicsImg from "../assets/images/ceramics.jpg";
// import carbonFiberImg from "../assets/images/carbonFiber.jpg";
// import copperImg from "../assets/images/copper.jpg";
// import foamImg from "../assets/images/foam.jpg";
// import fabricImg from "../assets/images/fabric.jpg";
// import surkhiImg from "../assets/images/surkhi.jpg";
// import waterproofingGelImg from "../assets/images/waterproofingGel.jpg";
// import hempcreteImg from "../assets/images/hempcrete.jpg";
// import planksImg from "../assets/images/planks.jpg";
// import steelPlateImg from "../assets/images/steelPlate.jpg";
// import plasticBottlesImg from "../assets/images/plasticBottles.jpg";
// import sanitaryImg from "../assets/images/sanitary.jpg";
// import wireImg from "../assets/images/wire.jpg";
// import solventImg from "../assets/images/solvent.jpg";
// import thinnerImg from "../assets/images/thinner.jpg";
// import cowDungImg from "../assets/images/cowDung.jpg";
// import clayImg from "../assets/images/clay.jpg";
// import bleachingPowderImg from "../assets/images/bleachingPowder.jpg";
// import concreteAdmixtureImg from "../assets/images/concreteAdmixture.jpg";
// import gravelImg from "../assets/images/gravel.jpg";

const products = [
  { id: 1, name: "Cement", price: 350, image: cementImg , description: "Used as a binder in concrete, an essential material for all types of construction." },
  { id: 2, name: "Sand", price: 250, image:sandImg ,description: "Used to give bulk, strength, and other properties to construction materials like asphalt and concrete. It is also a significant component of rendering." },
  { id: 3, name: "Steel", price: 550, image:steelImg, description: "Used in the manufacture of windows, railings, etc." },
  { id: 4, name: "Bitumen", price: 400, image:"", description: "Used for road construction, roofing, damp proofing, waterproofing, and other applications." },
  { id: 5, name: "Concrete", price: 500, image:"", description: "Used for constructing foundations, roads, bridges, walls, etc." },
  { id: 6, name: "Structural Steel", price: 600, image:"", description: "Used for the construction of steel structures." },
  { id: 7, name: "Binding Wires", price: 100, image:"", description: "Used for tying applications in the field of construction." },
  { id: 8, name: "Fly Ash", price: 150, image:"", description: "Used to improve the strength and segregation of the concrete and make it easier to pump." },
  { id: 9, name: "Aggregates", price: 200, image:"", description: "Used in construction to provide drainage, fill voids, protect pipes, and provide hard surfaces." },
  { id: 10, name: "Bricks", price: 7, image:"", description: "Used as a structural as well as a non-structural to make walls." },
  { id: 11, name: "Block", price: 50, image:"", description: "Used for various purposes, such as building load-bearing walls, retaining walls, partitions, and foundations." },
  { id: 12, name: "Timber", price: 400, image:"", description: "Used in doors, windows, cabinets, cupboards, shelves, tables, railings, etc." },
  { id: 13, name: "Nails", price: 10, image:"", description: "Most commonly used to fasten pieces of wood together." },
  { id: 14, name: "Lime", price: 50, image:"", description: "Used for soil stabilization in roads, earthen dams, airfields, and building foundations." },
  { id: 15, name: "Paint", price: 200, image:"", description: "Used to protect all sorts of buildings and structures from the effects of water and sun." },
  { id: 16, name: "Bamboo", price: 100, image:"", description: "Used to construct bamboo buildings as well as used for scaffolding." },
  { id: 17, name: "Glass", price: 350, image:"", description: "Used as insulation material, structural component, and external glazing material." },
  { id: 18, name: "Pipes", price: 150, image:"", description: "Used for water supply system." },
  { id: 19, name: "Tile", price: 60, image:"", description: "Used to cover surfaces like roofs, floors, and walls." },
  { id: 20, name: "Marble", price: 1000, image:"",description: "Used principally in buildings and monuments, interior decoration, sculpture, tabletops, etc." },
  { id: 21, name: "Mud", price: 30, image: "",description: "Used to coat, seal, or adhere to materials." },
  { id: 22, name: "Metal Sheet", price: 250, image: "", description: "Used in exterior or interior home decor and roofing material." },
  { id: 23, name: "Tar", price: 150, image: "",description: "Used in road works." },
  { id: 24, name: "Chipboard", price: 120, image: "", description: "Used for floor decking, shelving, and general building work." },
  { id: 25, name: "Water", price: 10, image: "", description: "Used in the preparation of mortar and concrete and for curing work." },
  { id: 26, name: "Rope", price: 50, image: "", description: "Used for dragging and lifting." },
  { id: 27, name: "Stone", price: 200, image: "", description: "Stones pave roads, footpaths, and open spaces around buildings." },
  { id: 28, name: "Green Cement", price: 400, image: "", description: "Used as a binder in concrete." },
  { id: 29, name: "Soil", price: 50, image: "", description: "Used for making bricks, Cement, etc." },
  { id: 30, name: "Granite", price: 1000, image: "", description: "Used in buildings, bridges, paving, monuments, and other exterior projects." },
  { id: 31, name: "Primer", price: 200, image: "", description: "Used for better paint adhesion to the surface and increases paint durability." },
  { id: 32, name: "Straw", price: 80, image: "", description: "Straw is a versatile byproduct of agriculture used in roofing, insulation, flooring, and more." },
  { id: 33, name: "Asphalt", price: 250, image: "", description: "Used in the construction of flexible pavement and driveways." },
  { id: 34, name: "Iron", price: 300, image: "", description: "Used in making fencing walls, structural parts of buildings, windows, etc." },
  { id: 35, name: "White Cement", price: 500, image: "", description: "Used for fixing marble tiles and sheathing walls, floors, and roofs." },
  { id: 36, name: "Aluminum", price: 350, image: "", description: "Used in external facades, roofs, walls, windows, and doors." },
  { id: 37, name: "Rubber", price: 150, image: "", description: "Used in the construction of joints, seals, and gaskets." },
  { id: 38, name: "Alloy", price: 600, image: "", description: "Used in stainless steel pipelines." },
  { id: 39, name: "Gypsum Board", price: 350, image: "", description: "Used as a finish for walls and ceilings." },
  { id: 40, name: "Gypsum", price: 100, image: "", description: "Used for plastering." },
  { id: 41, name: "Ceramics", price: 500, image: "", description: "Used in tiling and other decorative purposes." },
  { id: 42, name: "Carbon Fiber", price: 2000, image: "", description: "Used as reinforcement, but it is light, highly durable & strong compared to support." },
  { id: 43, name: "Copper", price: 1000, image: "", description: "Used in the construction industry to form pipes and tubing for potable water distribution and heating and cooling systems." },
  { id: 44, name: "Foam", price: 80, image: "", description: "Used for its lightweight, durable properties in sealing and thermal insulation applications." },
  { id: 45, name: "Fabric", price: 200, image: "", description: "Provide access between the inside and the outside of the building." },
  { id: 46, name: "Surkhi", price: 40, image: "", description: "Used for decorative purposes to give traditional looks." },
  { id: 47, name: "Liquid Waterproofing Gel", price: 500, image: "", description: "Liquid waterproofing products are specifically used for making concrete or mortar waterproof." },
  { id: 48, name: "Hempcrete", price: 600, image: "", description: "Used for walls and roofs." },
  { id: 49, name: "Planks", price: 150, image: "", description: "Used as temporary platforms on supported scaffolds." },
  { id: 50, name: "Steel Plate", price: 700, image: "", description: "Used in roofing." },
  { id: 51, name: "Plastic Bottles", price: 5, image: "", description: "Used for preparing walls and boundary walls." },
  { id: 52, name: "Sanitary Items", price: 150, image: "", description: "Sanitary fittings ensure hygienic sealing of pipelines." },
  { id: 53, name: "Wire", price: 50, image: "",description: "Used for lifting high loads with the aid of construction vehicles." },
  { id: 54, name: "Solvent", price: 100, image: "", description: "Used in many construction products, such as paints, thinners, and glues." },
  { id: 55, name: "Thinner", price: 120, image: "", description: "Used to dissolve paint and reduce its viscosity." },
  { id: 56, name: "Cow Dung", price: 20, image: "", description: "Used in traditional building materials and for making bricks." },
  { id: 57, name: "Clay", price: 40, image: "", description: "Used in brick-making and pottery." },
  { id: 58, name: "Bleaching Powder", price: 80, image: "", description: "Used for whitening and disinfecting." },
  { id: 59, name: "Concrete Admixture", price: 100, image: "", description: "Used to enhance the properties of concrete." },
  { id: 60, name: "Gravel", price: 100, image: "", description: "Used for filling and mixing in concrete." },
  { id: 61, name: "Fiber Cement", price: 450, image: "", description: "Used for cladding and external building facades." }
];

const ProductList = ({ search }) => {
  // ✅ Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="text-center col-span-4 text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;