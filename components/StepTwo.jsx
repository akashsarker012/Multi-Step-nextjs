import React from 'react';

const StepTwo = ({ formData, handleChange, errors }) => (
  <div>
    <div className="mb-4">
      <label className="block mb-1" htmlFor="mobile">Mobile Number:</label>
      <input
        type="text"
        name="mobile"
        id="mobile"
        value={formData.mobile}
        onChange={handleChange}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.mobile && <span className="text-red-500">{errors.mobile}</span>}
    </div>
    <div className="mb-4">
      <label className="block mb-1" htmlFor="address">Address:</label>
      <input
        type="text"
        name="address"
        id="address"
        value={formData.address}
        onChange={handleChange}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.address && <span className="text-red-500">{errors.address}</span>}
    </div>
  </div>
);

export default StepTwo;
