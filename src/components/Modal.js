"use client";

import React, { useState } from 'react';

const Modal = ({ addQuestion, closeModal }) => {
  const [title, setTitle] = useState('');
  const [choices, setChoices] = useState([
    { text: '', type: '' },
    { text: '', type: '' },
  ]);

  const handleChoiceChange = (index, field, value) => {
    const newChoices = [...choices];
    newChoices[index][field] = value;
    setChoices(newChoices);
  };

  const handleSave = () => {
    addQuestion({ title, choices });
    setTitle('');
    setChoices([
      { text: '', type: '' },
      { text: '', type: '' },
    ]);
    closeModal();
  };

  const isSaveEnabled = choices.every(choice => choice.text && choice.type);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg relative w-96">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 dark:text-white">Add Question</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
        />
        {choices.map((choice, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              placeholder="Choice text"
              value={choice.text}
              onChange={(e) => handleChoiceChange(index, 'text', e.target.value)}
              className="w-full p-2 mb-2 border rounded dark:bg-gray-700 dark:text-white"
            />
            <select
              value={choice.type}
              onChange={(e) => handleChoiceChange(index, 'type', e.target.value)}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            >
              <option value="" disabled>Select type</option>
              <option value="dollar">Dollar</option>
              <option value="number">Number</option>
              <option value="string">String</option>
              <option value="boolean">Boolean</option>
            </select>
          </div>
        ))}
        <button
          onClick={handleSave}
          disabled={!isSaveEnabled}
          className="w-full p-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Modal;
