import React from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex justify-center items-center'>
      <div className='absolute inset-0 bg-black opacity-80' onClick={onClose}></div>

      <div className='bg-white p-4 rounded-md shadow-md w-md relative'>
        <button onClick={onClose} className='absolute top-6 right-6'>
        <X className='text-gray-800 h-5 w-5 font-thin' />
        </button>
        {children}
      </div>
    </div>
  );
}