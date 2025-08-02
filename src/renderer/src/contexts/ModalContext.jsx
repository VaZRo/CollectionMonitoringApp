import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState({
    addItem: false,
    editItem: false,
  });

  const [editItemData, setEditItemData] = useState(null);

  const openModal = (name, data) => {
      setModals((prev) => ({...prev, [name]: true}));
      if(name === 'editItem') setEditItemData(data || null);
  }

  const closeModal = (name) => {
    setModals((prev) => ({...prev, [name]: false}));
    if(name === 'editItem') setEditItemData(null);
  }

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal, editItemData }}>
      {children}
    </ModalContext.Provider>
  );
};