import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-32">
      <div className="relative">
        <div className="loader animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-blue-600 text-xl">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
