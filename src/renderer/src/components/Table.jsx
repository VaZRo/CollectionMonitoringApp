import React from 'react'

export default function Table() {
  return (
    <div className="border border-gray-200 rounded-md shadow-xs">
      <table className='w-full table-auto'>
        <thead className="text-gray-400">
          <tr>
            <th className="font-medium py-2">ID</th>
            <th className="font-medium py-2">Name</th>
            <th className="font-medium py-2">Description</th>
            <th className="font-medium py-2">Quantity</th>
            <th className="font-medium py-2">Price</th>
            <th className="font-medium py-2">Actions</th>
          </tr>
        </thead>
        <tbody className='border-t border-gray-200'>
          <tr>
            <th className="font-medium">0</th>
            <th className="font-medium">Name 1</th>
            <th className="font-medium">Discription 1</th>
            <th className="font-medium">Quantity 1</th>
            <th className="font-medium">100</th>
            <th>
              <button>Edit</button>
              <button>Delete</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
