'use server';

import { IFeedback, IUser } from '@/@types/@types';
import { hashPassword } from '@/utils/hashPassword';

export async function postUser(formData: FormData): Promise<IFeedback | void> {
  const newUser: IUser = {
    complete_name_user: formData.get('txt_complete_name') as string,
    cpf_user: formData.get('txt_cpf') as string,
    email_user: formData.get('txt_email') as string,
    password_user: hashPassword(formData.get('txt_confirm_password') as string),
    premium_user: false as boolean,
  };

  try {
    const response = await fetch(`http:/127.0.0.1:3333/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });
    const feedback = (await response.json()) as IFeedback;
    if (!feedback.ok) throw new Error(feedback.message);

    return feedback;
  } catch (err: unknown) {
    if (err instanceof Error)
      return { ok: false, message: err.message } as IFeedback;
  }
}
