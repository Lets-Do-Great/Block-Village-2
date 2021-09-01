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
      {errors.email && "이메일은 필수 입력 항목입니다."}
      <input 
        type="text" 
        placeholder="NICKNAME"  
        {...register("nickname", { required: true })}
      />
      {errors.nickname && "닉네임은 필수 입력 항목입니다."}
      <input 
        type="password" 
        placeholder="PW"  
        {...register("password", { required: true })}
      />
      {errors.password && "비밀번호는 필수 입력 항목입니다."}
      <Button onClick={onSubmit} color="blue" size="large">SIGN UP</Button>
    </form>
  );
}

export default SignUp;