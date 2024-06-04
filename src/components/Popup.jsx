
import React from 'react';

const Popup = ({ message, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded shadow-lg text-center">
      <p>{message}</p>
      <button 
        className="mt-4 btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);

export default Popup;
