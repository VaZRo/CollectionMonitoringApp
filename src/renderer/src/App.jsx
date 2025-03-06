import React from 'react';
import { CirclePlus, Download } from 'lucide-react';

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div className='container mx-auto py-10'>
        <div className='flex flex-col space-y-4'>
          <div className='flex justify-between align-center'>
            <h1 className='text-3xl font-semibold'>Collection Dashboard</h1>
            <div className='gap-x-4 flex flex-row'>
              <button className='flex items-center bg-black py-2 px-4 rounded-lg gap-2 font-medium text-white' onClick={ipcHandle}>
                <CirclePlus className='h-4 w-4' />
                Add Item
              </button>
              <button className='flex items-center bg-red-400 py-2 px-4 rounded-lg gap-2 font-medium'>
                <Download className='h-4 w-4' />
                Export to Exel
              </button>
            </div>

          </div>
          <div>
            table
          </div>
        </div>
      </div>
    </>
  )
}

export default App
