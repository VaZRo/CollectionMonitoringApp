import React from 'react';
import { useModal } from '../../contexts/ModalContext';
import Modal from './Modal';

export default function AddItem() {
  const { isOpen, setIsOpen } = useModal();
  const handleInput = (e) => {
    const value = e.target.value;
    if(value < 1){
      e.target.value = 1;
    }
  };

  return(
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <form  className='p-2' >
        <h1 className='font-medium text-xl'>Add New Item</h1>
        <p className='text-gray-400 font-normal mt-1'>Add a new item to monitor here</p>
        <div className='mt-5 space-y-3'>
          {/* Name and Description*/}
          <div>
            <label htmlFor='name' className='font-medium'>Name</label>
            <input type='text' id='name' className='w-full border border-gray-200 rounded-md p-2' />
          </div>
          <div>
            <label htmlFor='description' className='font-medium'>Description</label>
            <input type='text' id='description' className='w-full border border-gray-200 rounded-md p-2' />
          </div>
          {/* Numbers Block */}
          <div className='flex flex-row'>
            <div className='w-1/2'>
              <label htmlFor='quantity' className='font-medium'>Quantity</label>
              <input type='number' id='quantity' className='w-full border border-gray-200 rounded-md p-2' defaultValue={1} onInput={handleInput}/>
            </div>
            <div className='w-1/2'>
              <label htmlFor='price' className='font-medium'>Price</label>
              <input type='number' id='price' className='w-full border border-gray-200 rounded-md p-2' defaultValue={1} onInput={handleInput}/>
            </div>
          </div>
          {/* Button */}
          <button className='bg-black hover:bg-gray-800 py-2 px-4 text-white subpixel-antialiased rounded-md block ml-auto'>Add Item</button>
        </div>
      </form>
    </Modal>
  )
}
