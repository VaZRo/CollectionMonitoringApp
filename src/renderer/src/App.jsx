import React from 'react';
import { CirclePlus, Download } from 'lucide-react';
import Table from './components/Table';
import { useModal } from './contexts/ModalContext';
import AddItem from './components/Modals/AddItem';

function App() {
  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')
  const { isOpen, setIsOpen } = useModal();

  const handleOpenAddItemModal = () => {
    console.log('open modal')
    setIsOpen(true);
    console.log(isOpen)
   }

  return (
    <>
      <div className='container mx-auto py-10'>
        <div className='flex flex-col space-y-4'>
          <div className='flex justify-between align-center'>
            <h1 className='text-3xl font-semibold'>Collection Dashboard</h1>
            <div className='gap-x-4 flex flex-row'>
              <button
                className='flex items-center bg-black hover:bg-gray-800 py-2 px-4 
                rounded-md gap-2 font-medium text-white transition duration-400'
                onClick={handleOpenAddItemModal}
              >
                <CirclePlus className='h-4 w-4' />
                Add Item
              </button>
              <button className='flex items-center py-2 px-4 rounded-md gap-2 font-medium text-gray-400 border border-gray-200'>
                <Download className='h-4 w-4' />
                Export to Exel
              </button>
            </div>

          </div>
          <div>
            <Table />
          </div>
        </div>
      </div>
      <AddItem />
    </>
  )
}

export default App
