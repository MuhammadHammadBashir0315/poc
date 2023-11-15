'use client'
// Import React
import React, { useState } from 'react';

// Create the Form component
const MyForm = () => {
  // State variables to store form data
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  // Function to handle form submission
  const handleSubmit = (e:any) => {
    e.preventDefault();
    // You can perform further actions with the form data here
    console.log('Selected Option:', selectedOption);
    console.log('Input Value:', inputValue);
    console.log('Textarea Value:', textareaValue);
  };

  // JSX for the form
  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
      <div>
        <label htmlFor="selectOption">Type</label>
        <select
          className='border w-[200px] h-10 mx-10'
          id="selectOption"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          required
        >
          <option value="">Select...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <div>
        <label htmlFor="inputField">Subject </label>
        <input
          className='border w-[200px] h-10 mx-4'
          type="text"
          id="inputField"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="textareaField">Message</label>
        <textarea
          className='border w-[200px] mx-2'
          id="textareaField"
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          required
        />
      </div>

      <div className='flex justify-center'>
        <button type="submit" className='bg-blue-500 p-2 rounded-lg'>Submit</button>
      </div>
    </form>
  );
};

// Export the Form component
export default MyForm;
