// Messages.js
import React from 'react';

const Note = () => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold mb-4">Messages</h2>
      <div className="bg-white p-8 shadow-md rounded-md">
        {/* Sample message section (adjust as needed) */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <span className="ml-2 text-lg font-semibold">John Doe</span>
          </div>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel scelerisque elit.</p>
        </div>
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <div className="bg-green-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-semibold">
              JS
            </div>
            <span className="ml-2 text-lg font-semibold">Jane Smith</span>
          </div>
          <p className="text-gray-700">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        {/* Add more messages as needed */}

        {/* Message input area */}
        <div className="mt-6">
          <textarea
            placeholder="Type your message..."
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"
          ></textarea>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
