import { useState } from "react";

const Labour = () => {
  const [location, setLocation] = useState("");
  const [isAvailable, setIsAvailable] = useState(null);
  const [labourCount, setLabourCount] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const availableLocations = ["Delhi", "Mumbai", "Bangalore", "Nuh", "Mewat", "Rohtak", "Gurgaon", "Noida", "Faridabad"];

  const checkAvailability = () => {
    setSubmitted(false);
    if (availableLocations.includes(location.trim())) {
      setIsAvailable(true);
    } else {
      setIsAvailable(false);
    }
  };

  const handleBooking = (e) => {
    e.preventDefault();
    console.log(`Booked ${labourCount} labour(s) in ${location}`);
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg mx-4">
        <h2 className="text-3xl font-bold text-center mb-6 underline text-gray-800">
          Book Your Labour
        </h2>

        {/* Location Input */}
        <div className="mb-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your location"
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={checkAvailability}
            className="bg-[#009688] text-white px-4 py-2 rounded-md hover:bg-[#009687df] transition"
          >
            Check Availability
          </button>
        </div>

        {/* Conditional Output */}
        {isAvailable === null ? (
          <p className="text-gray-600 text-center mb-4">
            Enter your location to check labour availability.
          </p>
        ) : isAvailable ? (
          <>
            <p className="text-green-600 text-center font-semibold mb-4">
              Labour is available in {location}!
            </p>

            {/* Booking Form */}
            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">
                  Number of Labourers
                </label>
                <input
                  type="number"
                  min="1"
                  value={labourCount}
                  onChange={(e) => setLabourCount(parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#009688] text-white py-3 rounded-md hover:bg-[#009687e0] transition duration-300"
              >
                Book Now
              </button>

              {submitted && (
                <p className="text-green-700 text-center font-medium mt-2">
                  Successfully booked {labourCount} labourer(s) in {location}! ✅
                </p>
              )}
            </form>
          </>
        ) : (
          <p className="text-red-600 text-center font-semibold">
            Sorry! No labour available in {location}.
          </p>
        )}
      </div>
    </div>
  );
};

export default Labour;
