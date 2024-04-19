"use client";
import React, { useState } from "react";
import { Button, Card, Input, Label } from "@/components/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/loginSchema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginForm = () => {

  const [error, setError] = useState('');

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit(async data => {
    
    try {
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false
      })

      if(!result?.ok){
        setError(result?.error as string);
        return;
      }
      
      router.push('/dashboard');
      router.refresh();
      
    } catch (error) {
      toast.error('Failed to login');
    }

    reset();
  });

  return (
    <Card>
      {
        error && <span role="alert" className="font-bold p-4 bg-red-500 rounded-md mb-2 mx-auto text-white">{error}</span>
      }
      <form className="mt-8" onSubmit={onSubmit}>
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
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

        <Button className="block mt-2 w-full" type="submit">Login</Button>
      </form>
    </Card>
  );
};

export default LoginForm;
