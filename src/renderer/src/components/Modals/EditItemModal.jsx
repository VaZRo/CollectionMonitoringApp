import React, { useState, useEffect, useMemo } from 'react';
import { useModal } from '../../contexts/ModalContext';
import Modal from './Modal';

export default function EditItemModal() {
  const { modals, closeModal, editItemData } = useModal();
  const defaultFormData = useMemo(() => ({
    id: editItemData?.id || '',
    name: editItemData?.name || '',
    description: editItemData?.description || '',
    quantity: editItemData?.quantity || 1,
    price: editItemData?.price || 0,
  }), [editItemData]);
  const [formData, setFormData] = useState(defaultFormData);

  useEffect(() => {
    setFormData(defaultFormData);
  }, [editItemData]);

  const handleInput = (e) => {
    // const value = e.target.value;
    // if (value < 1) {
    //   e.target.value = 1;
    // }

    const { id, value } = e.target;
    let newValue = value;

    if (id === 'quantity') {
      newValue = value < 1 ? 1 : value;
    }
    if (id === 'price') {
      newValue = value < 0 ? 0 : value;
    }

    setFormData(prev => ({
      ...prev,
      [id]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) return;
    try {
      await window.api.editCollection(formData);
      closeModal('editItem');
      setFormData(defaultFormData);
    } catch (error) {
      console.error('Error adding item:', error);
      // Optionally, you can show an error message to the user
    }
  };

  if (editItemData) {
    return (
      <Modal isOpen={modals.editItem} onClose={() => closeModal('editItem')}>
        <form className='p-2' onSubmit={handleSubmit} >
          <h1 className='font-medium text-xl'>Add New Item</h1>
          <p className='text-gray-400 font-normal mt-1'>Add a new item to monitor here</p>
          <div className='mt-5 space-y-3'>
            {/* Name and Description*/}
            <div>
              <label htmlFor='name' className='font-medium'>Name</label>
              <input
                type='text'
                id='name'
                className='w-full border border-gray-200 rounded-md p-2'
                value={formData.name}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <label htmlFor='description' className='font-medium'>Description</label>
              <input
                type='text'
                id='description'
                className='w-full border border-gray-200 rounded-md p-2'
                value={formData.description}
                onChange={handleInput}
                required
              />
            </div>
            {/* Numbers Block */}
            <div className='flex flex-row'>
              <div className='w-1/2'>
                <label htmlFor='quantity' className='font-medium'>Quantity</label>
                <input
                  type='number'
                  id='quantity'
                  className='w-full border border-gray-200 rounded-md p-2'
                  min={1}
                  value={formData.quantity}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className='w-1/2'>
                <label htmlFor='price' className='font-medium'>Price</label>
                <input
                  type='number'
                  id='price'
                  className='w-full border border-gray-200 rounded-md p-2'
                  min={0}
                  value={formData.price}
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            {/* Button */}
            <button className='bg-black hover:bg-gray-800 py-2 px-4 text-white subpixel-antialiased rounded-md block ml-auto'>Edit Item</button>
          </div>
        </form>
      </Modal>
    )
  }
}
