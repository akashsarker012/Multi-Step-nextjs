import React from 'react';

const StepThree = ({ formData, handleChange, errors }) => (
  <div>
    <div className="mb-4">
      <label className="block mb-1" htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.email && <span className="text-red-500">{errors.email}</span>}
    </div>
    <div className="mb-4">
      <label className="block mb-1" htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.password && <span className="text-red-500">{errors.password}</span>}
    </div>
  </div>
);

export default StepThree;
