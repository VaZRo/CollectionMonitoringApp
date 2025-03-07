import React from 'react';
import { ArrowDownUp } from 'lucide-react';

export default function ButtonFilter({ textField }) {
  return (
    <button className='hover:bg-gray-200 transition duration-400 ease-in-out rounded-md'>
      <div className="flex items-center gap-2 justify-center my-1 mx-3">
        {textField} <ArrowDownUp className="h-4 w-4" />
      </div>
    </button>
  )
}
