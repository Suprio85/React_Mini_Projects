import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Define the validation schema
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Email must be a valid email').required('Email is required'),
  age: yup.number().positive('Age must be a positive number').integer('Age must be an integer').required('Age is required'),
  password: yup.string().required('Password is required').min(3, 'Password must be at least 3 characters')
    .matches(/[a-zA-z]/, 'Password Must Contain a Letter')
    .matches(/[0-9]/, 'Password Must Contain a Number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password Must Contain at least a Special Character'),
 confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),

  
});

const Form = () => {
   
    const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  // Handle form submission
  const onSubmit = (data) => {
   console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input type="text" placeholder='Enter Your Name' {...register('name')} />
        {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}
      </div>
      
      <div>
        <label>Email:</label>
        <input type='email' placeholder='johndoe@example.com' {...register('email')} />
        {errors.email && <p style={{color:"red"}} >{errors.email.message}</p>}
      </div>
      
      <div>
        <label>Age:</label>
        <input type="number" placeholder='Enter Your Age' {...register('age')} />
        {errors.age && <p style={{color:"red"}} >{errors.age.message}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" placeholder='Enter Your Password' {...register('password')} />
        {errors.password && <p style={{color:"red"}} >{errors.password.message}</p>}
      </div>
        <div>
            <label>Confirm Password:</label>
            <input type="password" placeholder='Confirm Your Password' {...register('confirmPassword')} />
            {errors.confirmPassword && <p style={{color:"red"}} >{errors.confirmPassword.message}</p>}
        </div>
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
