import React from 'react';
import ButtonFilter from '../ButtonFilter';
import { ArrowDownUp } from 'lucide-react';
import TableItem from './TableItem';


export default function Table() {
  return (
    <div className="border border-gray-200 rounded-md shadow-xs">
      <table className='w-full table-auto'>
        <thead className="text-gray-400 hover:bg-gray-100 transition duration-400 ease-in-out">
          <tr>
            <th className="font-medium py-2">
              <ButtonFilter textField={'ID'} />
            </th>
            <th className="font-medium py-2">
              <ButtonFilter textField={'Name'} />
            </th>
            <th className="font-medium py-2">
              <ButtonFilter textField={'Description'} />
            </th>
            <th className="font-medium py-2">
              <ButtonFilter textField={'Quantity'} />
            </th>
            <th className="font-medium py-2">
              <ButtonFilter textField={'Price'} />
            </th>
            <th className="font-medium py-2">
              <div className="flex items-center gap-2 justify-center">
                Actions
              </div>
            </th>
          </tr>
        </thead>
        <tbody className='border-t border-gray-200 hover:bg-gray-100 transition duration-400 ease-in-out'>
          <TableItem id={1} name={'Item 1'} description={'Description 1'} quantity={1} price={100} />
        </tbody>
      </table>
    </div>
  )
}
