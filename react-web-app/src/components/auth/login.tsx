// components/auth/Login.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../../store/usersliece';
import { loginService } from '../../services/authservice';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const onSubmit = async (data: any) => {
        const user = await loginService(data.email, data.password);
        dispatch(login(user));
    };

    return (<div className="min-h-screen flex items-center justify-center" >
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-80" >
            <h2 className="text-2xl mb-4" > Login </h2>
            < div className="mb-4" >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700" > Email </label>
                < input {...register('email')} type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            </div>
            < div className="mb-4" >
                <label htmlFor="password" className="block text-sm font-medium text-gray-700" > Password </label>
                < input {...register('password')} type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            </div>
            < button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md" > Login </button>
        </form>
    </div>
    );
};

export default Login;
