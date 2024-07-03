'use server';

import { cookies } from 'next/headers';

export const clearToken = async () => {
  cookies().delete('token');
};
