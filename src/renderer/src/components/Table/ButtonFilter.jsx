import React, { useState, useEffect } from 'react';
import { MoveDown } from 'lucide-react';

export default function ButtonFilter({ textField, sortOrder, sortField }) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  const isActive = sortField.toLowerCase() === textField.toLowerCase();
  console.log(`ButtonFilter ${textField}:`, { isActive, sortOrder }); // Для отладки

  useEffect(() => {
    if (isActive) {
      setMounted(true);
      setTimeout(() => setVisible(true), 10);
    }
    else {
      {/* Сделать анимаци на исчезание стрелки не такой дерганной */ }
      setVisible(false);
      setTimeout(() => setMounted(false), 180);
    }
  }, [isActive])

  return (
    <button className='hover:bg-gray-200 transition duration-400 ease-in-out rounded-md'>
      <div className="flex items-center gap-1 justify-center my-1 mx-3">
        {textField}
        {/* <MoveDown
          className={`h-4 w-4 transition-transform duration-200 ease-in-out ${isActive ? (sortOrder === 'desc' ? 'rotate-180 visible' : 'rotate-0 visible') : 'invisible'
            }`}
        /> */}

        {mounted &&
          <MoveDown
            className={`h-4 w-4 transition-transform duration-200 ease-in-out
              ${visible
                ? (sortOrder === 'desc' ? 'rotate-180 opacity-100 scale-100 ' : 'rotate-0 opacity-100 scale-100 ')
                : 'opacity-0 scale-0'
              }`}
          />}

      </div>
    </button>
  )
}