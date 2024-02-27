// Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Row 1 */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-center">Box 1</h3>
          <p>Content for Box 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eveniet autem, sed nam aspernatur, vero ducimus esse molestiae culpa quod nisi cum eius dolorem omnis. Tempora neque error quisquam voluptates.</p>
       </div>

        <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-center">Box 2</h3>
          <p>Content for Box 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eveniet autem, sed nam aspernatur, vero ducimus esse molestiae culpa quod nisi cum eius dolorem omnis. Tempora neque error quisquam voluptates.</p>
       </div>

        <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-center">Box 3</h3>
          <p>Content for Box 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eveniet autem, sed nam aspernatur, vero ducimus esse molestiae culpa quod nisi cum eius dolorem omnis. Tempora neque error quisquam voluptates.</p>
       </div>

        {/* Row 2 */}
        <div className="bg-gradient-to-br from-pink-500 to-pink-700 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-center">Box 4</h3>
          <p>Content for Box 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eveniet autem, sed nam aspernatur, vero ducimus esse molestiae culpa quod nisi cum eius dolorem omnis. Tempora neque error quisquam voluptates.</p>
      4 </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-center">Box 5</h3>
          <p>Content for Box 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eveniet autem, sed nam aspernatur, vero ducimus esse molestiae culpa quod nisi cum eius dolorem omnis. Tempora neque error quisquam voluptates.</p>
       </div>

        <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-center">Box 6</h3>
          <p>Content for Box 6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eveniet autem, sed nam aspernatur, vero ducimus esse molestiae culpa quod nisi cum eius dolorem omnis. Tempora neque error quisquam voluptates.</p>
        </div>

        {/* Row 3 */}
        <div className="bg-gradient-to-br from-red-500 to-red-700 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-center">Box 7</h3>
          <p>Content for Box 7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eveniet autem, sed nam aspernatur, vero ducimus esse molestiae culpa quod nisi cum eius dolorem omnis. Tempora neque error quisquam voluptates.</p>
               </div>

        <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-center">Box 8</h3>
          <p>Content for Box 8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eveniet autem, sed nam aspernatur, vero ducimus esse molestiae culpa quod nisi cum eius dolorem omnis. Tempora neque error quisquam voluptates.</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Box 9</h3>
          <p>Content for Box 9 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat provident suscipit saepe, vero corrupti repellat eum odio explicabo. Odio quis repellat magnam possimus harum libero obcaecati corrupti eos unde nemo?</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
