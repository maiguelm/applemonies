import React from 'react';
import CompraCard from '../components/CompraCard';
import { Form } from '../components/Form';

export const Compra = () => {
  return (
    <div className='compra__check'>
      <>
        <div>
          <Form />
        </div>
        <div>
          <CompraCard />
        </div>
      </>
    </div>
  )
}

