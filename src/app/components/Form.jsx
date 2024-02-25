// components/Form.js
import { useState } from 'react';

const Form = () => {
  const [inputData, setInputData] = useState('');
  
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Save data to text file
    const data = new Blob([inputData], { type: 'text/plain' });
    const url = window.URL.createObjectURL(data);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'user_data.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        User Input:
      </label>
      <input
        type="text"
        value={inputData}
        onChange={handleInputChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Save to File
      </button>
    </form>
  );
};

export default Form;
