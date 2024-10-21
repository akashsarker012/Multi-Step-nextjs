import React from 'react';

const StepOne = ({ formData, handleChange, errors }) => (
  <div>
    <div className="mb-4">
      <label className="block mb-1" htmlFor="firstName">First Name:</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        required
        value={formData.firstName}
        onChange={handleChange}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
    </div>
    <div className="mb-4">
      <label className="block mb-1" htmlFor="lastName">Last Name:</label>
      <input
        required
        type="text"
        name="lastName"
        id="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
    </div>
  </div>
);

export default StepOne;
