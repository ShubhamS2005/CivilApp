import { useState } from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  // Simulated user data (replace this with real backend/auth data)
  const user = {
    name: "Lakshya",
    email: "lakshya@gmail.com",
    phone: "+1234567890",
    address: "123 Street, Delhi, India",
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleEditClick = () => setIsEditing((prev) => !prev);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Normally you'd send this to your backend
    console.log("User data saved:", editedUser);
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-6">
        <div className="bg-white shadow-lg rounded-lg p-8">
          {/* Single "My Profile" Heading */}
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            My Profile
          </h1>

          {/* Profile Info Section */}
          <div className="mb-6">
            <h2 className="text-xl font-medium text-gray-700 mb-2">Personal Information</h2>
            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-gray-600">Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={editedUser.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                ) : (
                  <p className="text-gray-700">{editedUser.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-600">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                ) : (
                  <p className="text-gray-700">{editedUser.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-600">Phone</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="phone"
                    value={editedUser.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                ) : (
                  <p className="text-gray-700">{editedUser.phone}</p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="block text-gray-600">Address</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="address"
                    value={editedUser.address}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                ) : (
                  <p className="text-gray-700">{editedUser.address}</p>
                )}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="text-center">
            <button
              onClick={handleEditClick}
              className="px-6 py-2 bg-[#009688] text-white rounded-md hover:bg-blue-700 transition"
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>

            {isEditing && (
              <button
                onClick={handleSave}
                className="ml-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
