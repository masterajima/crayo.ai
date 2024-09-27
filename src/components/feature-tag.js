import React from 'react';

const FeatureTag = ({ icon, label }) => {
  return (
    <div className='flex items-center bg-blue-300 bg-opacity-40 rounded-full px-6 py-2'>
      {icon}
      <span className='text-xs font-medium text-[#000d49]'>{label}</span>
    </div>
  );
};

export default FeatureTag;
