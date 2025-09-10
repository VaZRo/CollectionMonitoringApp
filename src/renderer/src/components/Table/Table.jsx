import React, { useEffect, useState, useMemo } from 'react';
import ButtonFilter from './ButtonFilter';
import { useModal } from '../../contexts/ModalContext';
import TableItem from './TableItem';


export default function Table() {
  const [collections, setCollections] = useState([]);
  const { modals } = useModal();

  // sort variables
  const [sortField, setSortField] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' | 'desc'

  // do sort by alphabet

  const fetchCollections = async () => {
    try {
      const data = await window.api.getCollections();
      setCollections(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('fetchCollections error:', err);
      setCollections([]);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, [modals?.addItem, modals?.editItem]);


  const sortedCollections = useMemo(() => {
    return [...collections].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[sortField] > b[sortField] ? 1 : -1;
      }
      return a[sortField] < b[sortField] ? 1 : -1;
    });
  }, [collections, sortField, sortOrder]);

  const handleSort = (field) => {
    if (field === sortField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      // setSortOrder('asc');
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    }
  };

  return (
    <div className="border border-gray-200 rounded-md shadow-xs">
      <table className='w-full table-auto'>
        <thead className="text-gray-400 hover:bg-gray-100 transition duration-400 ease-in-out">
          <tr>
            <th className="font-medium py-2 cursor-pointer" onClick={() => handleSort('id')}>
              <ButtonFilter textField={'ID'} sortOrder={sortOrder} sortField={sortField} />
            </th>
            <th className="font-medium py-2 cursor-pointer" onClick={() => handleSort('name')}>
              <ButtonFilter textField={'Name'} sortOrder={sortOrder} sortField={sortField} />
            </th>
            <th className="font-medium py-2 cursor-pointer" onClick={() => handleSort('description')}>
              <ButtonFilter textField={'Description'} sortOrder={sortOrder} sortField={sortField} />
            </th>
            <th className="font-medium py-2 cursor-pointer" onClick={() => handleSort('quantity')}>
              <ButtonFilter textField={'Quantity'} sortOrder={sortOrder} sortField={sortField} />
            </th>
            <th className="font-medium py-2 cursor-pointer" onClick={() => handleSort('price')}>
              <ButtonFilter textField={'Price'} sortOrder={sortOrder} sortField={sortField} />
            </th>
            <th className="font-medium py-2">
              <div className="flex items-center gap-2 justify-center">Actions</div>
            </th>
          </tr>
        </thead>
        <tbody className='border-t border-gray-200 hover:bg-gray-100 transition duration-400 ease-in-out'>
          {sortedCollections.map((item) => (
            <TableItem
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              quantity={item.quantity}
              price={item.price}
              onDeleted={fetchCollections}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
