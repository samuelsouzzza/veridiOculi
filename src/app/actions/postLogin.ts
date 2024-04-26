'use server';
import { hashPassword } from '@/utils/hashPassword';
import { IFeedback } from '@/@types/@types';

export async function postLogin(formData: FormData): Promise<IFeedback | void> {
  const user = {
    email_user: formData.get('txt_email') as string,
    password_user: hashPassword(formData.get('txt_password') as string),
  };

  try {
    const response = await fetch(`http:/127.0.0.1:3333/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const feedback = (await response.json()) as IFeedback;
    if (!feedback.ok) throw new Error(feedback.message);

    return feedback;
  } catch (err: unknown) {
    if (err instanceof Error)
      return { ok: false, message: err.message } as IFeedback;
  }
}
