"use client";

import React, { useState } from 'react';
import Modal from '@/components/Modal';

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900 p-6 dark">
      {isModalOpen && <Modal addQuestion={addQuestion} closeModal={() => setIsModalOpen(false)} />}
      <div className="flex justify-end mb-4">
        <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white rounded p-2">Add Question</button>
      </div>
      <h1 className="text-2xl font-bold dark:text-white">Questions:</h1>
      <pre className="text-white">{JSON.stringify(questions, null, 2)}</pre>
    </div>
  );
}
