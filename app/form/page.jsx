"use client";
import StepOne from "@/components/StepOne";
import StepThree from "@/components/StepThree";
import StepTwo from "@/components/StepTwo";
import React, { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (step === 0 && !formData.firstName) {
      newErrors.firstName = "First Name is required";
    }
    if (step === 0 && !formData.lastName) {
      newErrors.lastName = "Last Name is required";
    }
    if (step === 1 && !formData.mobile) {
      newErrors.mobile = "Mobile Number is required";
    }
    if (step === 1 && !formData.address) {
      newErrors.address = "Address is required";
    }
    if (step === 2 && !formData.email) {
      newErrors.email = "Email is required";
    }
    if (step === 2 && !formData.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      setStep(step + 1);
      setErrors({});
      setSubmitted(false);
    } else {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); 
    if (validate()) {
      setErrors({});
      alert("Form submitted successfully");
      console.log(formData);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white shadow-md rounded-lg">
      <div>
        {step === 0 &&  <StepOne formData={formData} handleChange={handleChange} errors={errors} />}

        {step === 1 && <StepTwo formData={formData} handleChange={handleChange} errors={errors} />}
        {step === 2 && <StepThree formData={formData} handleChange={handleChange} errors={errors} />}

        <div className="mt-4 space-y-4">
          {step > 0 && (
            <button
              type="button"
              onClick={handleBack}
              className="w-full bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
            >
              Back
            </button>
          )}

          {step < 2 ? (
            <button
              type="button"
              onClick={handleNext}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
