'use server';

import { IFeedback, IUser } from '@/@types/@types';

export async function postUser(
  formData: FormData
): Promise<IFeedback | undefined> {
  const newUser: IUser = {
    complete_name_user: formData.get('txt_complete_name') as string,
    email_user: formData.get('txt_email') as string,
    cpf_user: formData.get('txt_cpf') as string,
    password_user: formData.get('txt_confirm_password') as string,
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

    if (!response.ok) throw new Error('Não foi possível criar o usuário!');

    return (await response.json()) as IFeedback;
  } catch (err: unknown) {
    if (err instanceof Error)
      return { ok: false, message: err.message } as IFeedback;
    console.log(err);
  }
}
