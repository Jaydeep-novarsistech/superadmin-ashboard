import React from 'react';
import jsPDF from 'jspdf';

const Users = () => {
  const handleDownload = () => {
    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Add content to the PDF
    pdf.setFontSize(16);
    pdf.text('Sample PDF Document', 10, 10);

    pdf.setFontSize(12);
    pdf.text('This is a paragraph of text in the PDF.', 10, 20);
    pdf.text('You can add more text, images, or customize it as needed.', 10, 30);

    // Save the PDF
    pdf.save('sample.pdf');
  };

  return (
    <div className="mt-8" >
      <h2 className="text-3xl font-semibold mb-4">Users</h2>
      <div className="flex items-center justify-between mb-4">
        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden mx-auto">
          <input
            type="text"
            placeholder="Search users..."
            className="border-none focus:outline-none py-2 px-4 w-64"
          />
          <button className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 focus:outline-none">
            Search
          </button>
        </div>
        <button
          onClick={handleDownload}
          className="bg-green-500 text-white py-2 px-4 hover:bg-green-600 focus:outline-none rounded-3xl"
        >
          Download Sample PDF
        </button>
      </div>

      <div className="bg-white p-8 shadow-md rounded-md overflow-x-auto bg-no-repeat" style={{ backgroundImage: 'url("https://static-cse.canva.com/blob/1144483/removingbackgroundimages_Unsplash.jpeg")' }}>
        <table className="w-full table-auto text-black-800 font-semibold">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Created At</th>
              <th className="py-2 px-4 border-b">Updated At</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample user rows (adjust as needed) */}
            <tr className="hover:bg-gray-100 text-center">
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">john@example.com</td>
              <td className="py-2 px-4 border-b">Admin</td>
              <td className="py-2 px-4 border-b text-green-600">Active</td>
              <td className="py-2 px-4 border-b">2022-02-18</td>
              <td className="py-2 px-4 border-b">2022-02-18</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md ml-2 hover:bg-red-600">
                  Delete
                </button>
                <button className="bg-green-500 text-white px-3 py-1 rounded-md ml-2 hover:bg-green-600">
                  view
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100 text-center">
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">john@example.com</td>
              <td className="py-2 px-4 border-b">Admin</td>
              <td className="py-2 px-4 border-b text-green-600">Active</td>
              <td className="py-2 px-4 border-b">2022-02-18</td>
              <td className="py-2 px-4 border-b">2022-02-18</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md ml-2 hover:bg-red-600">
                  Delete
                </button>
                <button className="bg-green-500 text-white px-3 py-1 rounded-md ml-2 hover:bg-green-600">
                  view
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100 text-center">
              <td className="py-2 px-4 border-b">3</td>
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">john@example.com</td>
              <td className="py-2 px-4 border-b">Admin</td>
              <td className="py-2 px-4 border-b text-green-600">Active</td>
              <td className="py-2 px-4 border-b">2022-02-18</td>
              <td className="py-2 px-4 border-b">2022-02-18</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md ml-2 hover:bg-red-600">
                  Delete
                </button>
                <button className="bg-green-500 text-white px-3 py-1 rounded-md ml-2 hover:bg-green-600">
                  view
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100 text-center">
              <td className="py-2 px-4 border-b">4</td> 
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">john@example.com</td>
              <td className="py-2 px-4 border-b">Admin</td>
              <td className="py-2 px-4 border-b text-green-600">Active</td>
              <td className="py-2 px-4 border-b">2022-02-18</td>
              <td className="py-2 px-4 border-b">2022-02-18</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md ml-2 hover:bg-red-600">
                  Delete
                </button>
                <button className="bg-green-500 text-white px-3 py-1 rounded-md ml-2 hover:bg-green-600">
                  view
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100 text-center">
              <td className="py-2 px-4 border-b">5</td>
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">john@example.com</td>
              <td className="py-2 px-4 border-b">Admin</td>
              <td className="py-2 px-4 border-b text-green-600">Active</td>
              <td className="py-2 px-4 border-b">2022-02-18</td>
              <td className="py-2 px-4 border-b">2022-02-18</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md ml-2 hover:bg-red-600">
                  Delete
                </button>
                <button className="bg-green-500 text-white px-3 py-1 rounded-md ml-2 hover:bg-green-600">
                  view
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100 text-center">
              <td className="py-2 px-4 border-b">6</td>
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">john@example.com</td>
              <td className="py-2 px-4 border-b">Admin</td>
              <td className="py-2 px-4 border-b text-green-600">Active</td>
              <td className="py-2 px-4 border-b">2022-02-18</td>
              <td className="py-2 px-4 border-b">2022-02-18</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md ml-2 hover:bg-red-600">
                  Delete
                </button>
                <button className="bg-green-500 text-white px-3 py-1 rounded-md ml-2 hover:bg-green-600">
                  view
                </button>
              </td>
            </tr>
            {/* Add more rows for additional users */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
