import { useState } from "react";

const Calculator = () => {
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [thickness, setThickness] = useState("");
  const [result, setResult] = useState(null);

  const calculateMaterials = (e) => {
    e.preventDefault();

    const l = parseFloat(length);
    const h = parseFloat(height);
    const t = parseFloat(thickness) / 100; // converting cm to meters

    if (isNaN(l) || isNaN(h) || isNaN(t)) {
      alert("Please enter valid values.");
      return;
    }

    const wallVolume = l * h * t; // in m³

    // Rough estimation (can be adjusted based on standards)
    const bricksPerM3 = 500; // standard size bricks
    const cementPerM3 = 8; // bags per cubic meter
    const sandPerM3 = 0.45; // cubic meters of sand per m³ of wall

    setResult({
      bricks: Math.ceil(wallVolume * bricksPerM3),
      cement: Math.ceil(wallVolume * cementPerM3),
      sand: (wallVolume * sandPerM3).toFixed(2),
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Construction Material Estimator</h2>
      <form onSubmit={calculateMaterials} className="space-y-4">
        <div>
          <label className="block">Wall Length (in meters)</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block">Wall Height (in meters)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block">Wall Thickness (in cm)</label>
          <input
            type="number"
            value={thickness}
            onChange={(e) => setThickness(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"

          
          className="w-full bg-[#009688] text-white py-2 rounded hover:bg-[#009687eb]"
        >
          Calculate
        </button>
      </form>

      {result && (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow-inner">
          <h3 className="text-xl font-semibold mb-2">Estimated Materials:</h3>
          <p>🧱 Bricks: <strong>{result.bricks}</strong></p>
          <p>🎒 Cement Bags: <strong>{result.cement}</strong></p>
          <p>🪨 Sand: <strong>{result.sand} m³</strong></p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
