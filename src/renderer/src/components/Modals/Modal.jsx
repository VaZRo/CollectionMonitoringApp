import React from 'react';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-4 rounded-md shadow-md'>
        <button onClick={onClose} className='absolute top-2 right-2'>
          ✖
        </button>
        {children}
      </div>
    </div>
  )
}
