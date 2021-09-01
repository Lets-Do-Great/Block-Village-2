import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../components/button/button';

const FindPW = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="email" 
        placeholder="E-mail"  
        {...register("email", { required: true })}
      />
      <Button onClick={onSubmit} color="pink" size="large">SIGN IN</Button>
    </form>
  );
}

export default FindPW;