import React from "react";
import { FaUser, FaEnvelope, FaCheckCircle } from 'react-icons/fa';

export default function Stepper({ currentStep }) {
  return (
    <div className="max-w-2xl mx-auto mb-10">
      <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        {/* Step 1: Personal Info */}
        <li className={`flex md:w-full items-center ${currentStep >= 0 ? 'text-blue-600 dark:text-blue-500'  : 'text-gray-500'} sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block dark:after:border-gray-700`}>
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <FaUser className="w-4 h-4 me-2.5" />
            Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          </span>
        </li>
        
        {/* Step 2: Account Info */}
        <li className={`flex md:w-full items-center ${currentStep >= 1 ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500'} after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block dark:after:border-gray-700`}>
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <FaEnvelope className="w-4 h-4 me-2.5" />
            Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          </span>
        </li>

        {/* Step 3: Confirmation */}
        <li className={`flex md:w-full items-center ${currentStep >= 2 ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500'} dark:after:border-gray-700`}>
          <FaCheckCircle className="w-4 h-4 me-2.5" />
          Confirmation <span className="hidden sm:inline-flex sm:ms-2">Info</span>
        </li>
      </ol>
    </div>
  );
}
