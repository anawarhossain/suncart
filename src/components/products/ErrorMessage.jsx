import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="text-center py-20">
      <div className="text-5xl mb-4">😕</div>
      <p className="text-red-500 font-semibold text-lg">{message}</p>
      <p className="text-gray-400 text-sm mt-2">
        Please check your internet connection or try again later.
      </p>
    </div>
  );
};

export default ErrorMessage;
