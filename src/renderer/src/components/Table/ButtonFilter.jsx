import React from 'react';
import { MoveDown } from 'lucide-react';

export default function ButtonFilter({ textField, sortOrder, sortField }) {
  const isActive = sortField.toLowerCase() === textField.toLowerCase();
  console.log(`ButtonFilter ${textField}:`, { isActive, sortOrder }); // Для отладки
  
  return (
    <button className='hover:bg-gray-200 transition duration-400 ease-in-out rounded-md'>
      <div className="flex items-center gap-1 justify-center my-1 mx-3">
        {textField}
        {isActive && <MoveDown 
          className={`h-4 w-4 transition-transform duration-200 ease-in-out ${
            isActive ? (sortOrder === 'desc' ? 'rotate-180' : 'rotate-0') : ''
          }`}
        />}
        
      </div>
    </button>
  ) 
}