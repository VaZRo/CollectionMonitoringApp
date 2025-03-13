import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

export default function TableItem({id, name, description, quantity, price}) {
    return (
        <tr className=''>
            <th className="font-medium py-3">{id}</th>
            <th className="font-medium py-3">{name}</th>
            <th className="font-medium py-3">{description}</th>
            <th className="font-medium py-3">{quantity}</th>
            <th className="font-medium py-3">{price}</th>
            <th className='flex flex-row justify-center gap-1 py-3'>
                <button className='hover:bg-gray-200 border-white rounded-md w-9 h-7 flex justify-center items-center'><Pencil className='w-5 h-5' /></button>
                <button className='hover:bg-gray-200 border-white rounded-md w-9 h-7 flex justify-center items-center'><Trash2 className='w-5 h-5'/></button>
            </th>
        </tr>
    )
}
