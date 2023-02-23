import { Component, createRef, useCallback, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Input from '../Input';
import { IFood } from '../../pages/Dashboard';
import { Modal } from '../Modal';
import { FormHandles } from '@unform/core';

export interface IModalProps {
  isOpen: boolean;
  setIsOpen(): void;
  handleAddFood: (food: Omit<IFood, 'id' | 'available'>) => void;
}

interface ICreateFoodModalData {
  name: string;
  image: string;
  price: number;
  description: string;
}


export function ModalAddFood({isOpen, handleAddFood, setIsOpen}: IModalProps){
  const formRef = useRef<FormHandles>(null);


  const handleSubmit = useCallback(async (data: ICreateFoodModalData) => {
    handleAddFood(data);
    setIsOpen();
  },
  [handleAddFood, setIsOpen],
  );
  


    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Novo Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  }

