import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserCard({ user }) {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: user.name,
    age: user.age,
  });

  const goToUserDetailPage = (id) => {
    navigate(`/about/userDetail/${id}`);
  };

  const deleteItem = async (e) => {
    e.stopPropagation();
    try {
      await axios.delete(`http://localhost:8000/students/${user.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const openPopup = (e) => {
    e.stopPropagation();
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setEditedUser({ name: user.name, age: user.age });
  };

    const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8000/students/${user.id}`, editedUser);
      setIsPopupOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        onClick={() => goToUserDetailPage(user.id)}
        className="user-card border-1 rounded-2xl flex flex-col items-start !p-5 cursor-pointer"
      >
        <h1>User: {user.name}</h1>
        <h1>Age: {user.age}</h1>
        <div className="btn-action--wrapper">
          <button onClick={deleteItem} className="card-deleteBtn !mr-3">
            Delete
          </button>
          <button onClick={openPopup} className="card-editBtn">
            Edit
          </button>
        </div>
      </div>

      {/* popup */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center  bg-slate-500/90  dark:bg-slate-950/90 bg-opacity-50 z-50 transition-opacity duration-300"
          onClick={closePopup}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-800 !p-6 rounded-xl shadow-xl w-[300px] transition-all duration-300 scale-100"
          >
            <h2 className="text-xl font-semibold !mb-4">Edit User</h2>
            <input
              name="name"
              type="text"
              value={editedUser.name}
              onChange={handleChange}
              className="border !px-3 !py-1 !mb-3 w-full rounded"
              placeholder="Name"
            />
            <input
              name="age"
              type="number"
              value={editedUser.age}
              onChange={handleChange}
              className="border !px-3 !py-1 !mb-4 w-full rounded"
              placeholder="Age"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={closePopup}
                className="bg-gray-300 text-black !px-4 !py-1 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-[#198754] text-white !px-4 !py-1 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserCard;
