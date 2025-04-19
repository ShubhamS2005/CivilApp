import { useState } from "react";

const LoginModal = ({ onClose }) => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-[300px]">
        <h2 className="text-xl font-semibold mb-4">
          {isSignup ? "Sign Up" : "Login"}
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="border p-2 w-full mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
        />

        <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 mb-2">
          {isSignup ? "Sign Up" : "Login"}
        </button>

        <p className="text-sm text-center">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => setIsSignup(false)}
              >
                Login
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => setIsSignup(true)}
              >
                Sign up
              </button>
            </>
          )}
        </p>

        <button
          onClick={onClose}
          className="mt-4 text-gray-500 text-sm hover:underline block mx-auto"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
