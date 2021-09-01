import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../components/button/button';

const SetPW = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="password" 
        placeholder="NEW PW"  
        {...register("password", { required: true })}
      />
      {errors.password && "비밀번호를 입력하세요."}
      <Button onClick={onSubmit} color="blue" size="large">SIGN IN</Button>
    </form>
  );
}

export default SetPW;