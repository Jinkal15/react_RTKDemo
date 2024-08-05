import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../store/usersliece';
import { RootState } from '../store/store';
import { updateUserService } from '../services/authservice';

const ProfilePage = () => {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  React.useEffect(() => {
    if (user) {
      Object.keys(user).forEach((key) => setValue(key, user[key]));
    }
  }, [user, setValue]);

  const onSubmit = async (data: any) => {
    const updatedUser = await updateUserService({ ...user, ...data });
    dispatch(updateUser(updatedUser));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">My Profile</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input {...register('name')} type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input {...register('email')} type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input {...register('phone')} type="text" id="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input {...register('address')} type="text" id="address" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md">Update</button>
      </form>
    </div>
  );
};

export default ProfilePage;
