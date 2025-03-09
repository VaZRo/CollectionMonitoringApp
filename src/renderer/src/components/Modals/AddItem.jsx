import React from 'react';
import { useModal } from '../../contexts/ModalContext';
import Modal from './Modal';

export default function AddItem() {
  const { isOpen, setIsOpen } = useModal();
  return(
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      This is modal AddItem
    </Modal>
  )
}
