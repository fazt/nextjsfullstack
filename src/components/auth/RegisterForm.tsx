'use client'
import { registerSchema } from '@/schemas/registerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Button, Card, Input, Label } from '../ui';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = handleSubmit(async data => {
    
    try {
      await axios.post('/api/auth/register', data);
      
      toast.success('Registration successful');

      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
      
    } catch (error) {
      toast.error('Registration error');
    }

    reset();
  });

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
        <div className="mb-4">
          <Label>Name</Label>
          <Input
            className="block py-2 px-2 w-full"
            type="text"
            placeholder="Name"
            {...register("name")}
          />
          {errors.name && <span className="text-red-600 text-sm">{errors.name.message as string}</span>}
        </div>

        <div className="mb-4">
          <Label>Last Name</Label>
          <Input
            className="block py-2 px-2 w-full"
            type="text"
            placeholder="Last Name"
            {...register("lastname")}
          />
          {errors.lastname && <span className="text-red-600 text-sm">{errors.lastname.message as string}</span>}
        </div>

        <div className="mb-4">
          <Label>Email</Label>
          <Input
            className="block py-2 px-2 w-full"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <span className="text-red-600 text-sm">{errors.email.message as string}</span>}
        </div>

        <div className="mb-6">
          <Label>Password</Label>
          <Input
            className="block py-2 px-2 w-full"
            type="password"
            placeholder="XXXXXXX"
            {...register("password")}
          />
          {errors.password && <span className="text-red-600 text-sm">{errors.password.message as string}</span>}
        </div>

        <Button className="w-full" type="submit">Register</Button>
      </form>
    </Card>
  )
}

export default RegisterForm
