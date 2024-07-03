'use server';
import { cookies } from 'next/headers';

export const getToken = async () => {
  return cookies().get('token')?.value;
};
