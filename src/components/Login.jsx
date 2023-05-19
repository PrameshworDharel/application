import React from 'react';

const Login= () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded p-6 mt-10 shadow-md">
      <h1 className="text-2xl text-centerfont-bold mb-4"> Form</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input type="text" id="name"name="name" className="w-full px-3 py-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded"  />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Age</label>
          <input  type="number" id="age" name="age" className="w-full px-3 py-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default Login;
