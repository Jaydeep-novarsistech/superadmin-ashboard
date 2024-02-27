// SubAdmin.js
import React from 'react';

const SubAdmin = () => {
  return (
    <div className="flex items-center justify-center mt-[5rem]">
      <div className="w-[35rem] bg-white p-8 shadow-md rounded-md bg-cover" style={{ backgroundImage: 'url("https://www.freevector.com/uploads/vector/preview/10175/FreeVector-Green-Light-Background-Image.jpg")' }}>
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">Add SubAdmin</h2>
        <form className="text-white">
          <div className="mb-4">
            <label className="block text-sm font-medium">User Name</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">User ID</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Create Date</label>
            <input
              type="text"
              readOnly
              value={new Date().toLocaleDateString()} // Display current date
              className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none w-full"
          >
            Add  SubAdmin
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubAdmin;
