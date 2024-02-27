import React from 'react';

const AllDetailsSubAdmin = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("your-image-url.jpg")' }}>
      <div className="flex justify-center items-center h-full">
        <table className="bg-white shadow-md rounded-md w-full max-w-3xl overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4">Field 1</th>
              <th className="py-2 px-4">Field 2</th>
              <th className="py-2 px-4">Field 3</th>
              <th className="py-2 px-4">Field 4</th>
              <th className="py-2 px-4">Field 5</th>
              <th className="py-2 px-4">Field 6</th>
              <th className="py-2 px-4">Field 7</th>
              <th className="py-2 px-4">Field 8</th>
              <th className="py-2 px-4">Field 9</th>
              <th className="py-2 px-4">Field 10</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data, replace with your own */}
            <tr>
              <td className="py-2 px-4">Data 1</td>
              <td className="py-2 px-4">Data 2</td>
              <td className="py-2 px-4">Data 3</td>
              <td className="py-2 px-4">Data 4</td>
              <td className="py-2 px-4">Data 5</td>
              <td className="py-2 px-4">Data 6</td>
              <td className="py-2 px-4">Data 7</td>
              <td className="py-2 px-4">Data 8</td>
              <td className="py-2 px-4">Data 9</td>
              <td className="py-2 px-4">Data 10</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDetailsSubAdmin;
