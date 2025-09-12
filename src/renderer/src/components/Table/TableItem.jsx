import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { useModal } from '../../contexts/ModalContext'; 

export default function TableItem({ id, name, description, quantity, price, onDeleted }) {
    const { openModal } = useModal();

    const handleDelete = async () => {
        try {
            await window.api.deleteCollection(id);
            console.log(`Item with ID ${id} deleted successfully.`);   
            if(onDeleted) onDeleted(); 
        } catch (error) {
            console.error(`Error deleting item with ID ${id}:`, error);
        }
    }

    return (
        <tr>
            <th className="font-medium py-3">{id}</th>
            <th className="font-medium py-3">{name}</th>
            <th className="font-medium py-3">{description}</th>
            <th className="font-medium py-3">{quantity}</th>
            <th className="font-medium py-3">{price}</th>
            <th className='flex flex-row justify-center gap-1 py-3'>
                <button onClick={() => openModal('editItem', {id, name, description, quantity, price})} className='hover:bg-gray-200 border-white rounded-md w-9 h-7 flex justify-center items-center'>
                    <Pencil className='w-5 h-5' />
                </button>
                <button onClick={handleDelete} className='hover:bg-gray-200 border-white rounded-md w-9 h-7 flex justify-center items-center'>
                    <Trash2 className='w-5 h-5' />
                </button>
            </th>
        </tr>
    )
}
