import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../components/button/button';

const SignUp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="email" 
        placeholder="E-mail"  
        {...register("email", { required: true })}
      />
      <input 
        type="text" 
        placeholder="NICKNAME"  
        {...register("nickname", { required: true })}
      />
      <input 
        type="password" 
        placeholder="PW"  
        {...register("password", { required: true })}
      />
      <Button onClick={onSubmit} color="blue" size="large">SIGN UP</Button>
    </form>
  );
}

export default SignUp;