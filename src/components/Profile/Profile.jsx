import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";

const Profile = () => {
  const { user, loading, updateUserProfile } = useContext(AuthContext) || {};
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  if (loading) return <LoadingSpinner smallHeight/>;

  const handleUpdateProfile = async () => {
    setIsUpdating(true);
    updateUserProfile(name, photoURL)
      .then(() => {
        setMessage("Profile updated successfully!");
        setIsEditing(false); // Close the edit mode after updating
      })
      .catch((error) => {
        setMessage(`Failed to update profile: ${error.message}`);
      });
    setIsUpdating(false);
  };

  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center">
      <Helmet>
        <title>HomeNest | Profile</title>
      </Helmet>
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-3xl">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-gray-200 flex flex-col items-center justify-center p-6 relative">
            <img
              alt="profile"
              src={user?.photoURL}
              className="rounded-full  h-32 w-32 object-cover border-4 border-white shadow-md mb-4"
            />
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-sm font-semibold text-gray-800 border border-gray-300 rounded-lg px-2 py-1"
                  autoFocus
                />
                <input
                  type="text"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="text-sm text-gray-600 border border-gray-300 rounded-lg px-2 py-1 mt-2"
                  placeholder="Photo URL"
                />
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold text-gray-800">
                  {user?.displayName}
                </h2>
                <FaEdit
                  className="text-gray-500 cursor-pointer absolute top-4 right-4"
                  onClick={() => setIsEditing(true)}
                />
              </>
            )}
            <p className="text-sm text-gray-600">{user?.email}</p>
          </div>
          <div className="md:w-2/3 p-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-700">
                Profile Details
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-semibold">User ID: </span>
                {user?.uid}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-semibold">Email: </span>
                {user?.email}
              </p>
            </div>
            {isEditing && (
              <div className="flex flex-col md:flex-row items-center justify-between mt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 w-full md:w-auto mb-2 md:mb-0"
                  onClick={handleUpdateProfile}
                  disabled={isUpdating}
                >
                  {isUpdating ? "Updating..." : "Save Changes"}
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 w-full md:w-auto"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            )}
            {message && (
              <p className="mt-4 text-sm text-green-600">{message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
