import React, { useState } from 'react';

const Input = ({ label, value, onChange, type}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className='flex flex-col'>
      <label>{label}</label>
      <input type={type} value={value} onChange={handleChange} className='border-2 border-solid p-1'/>
    </div>
  );
};

export default Input;