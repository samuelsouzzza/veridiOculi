'use server';
import { IFeedback } from '@/@types/@types';
import { cookies } from 'next/headers';

export async function postAnalysis(
  formData: FormData
): Promise<IFeedback | void> {
  try {
    const TOKEN = cookies().get('token')?.value;

    if (!TOKEN)
      throw new Error(
        'Você precisa estar autenticado para poder fazer as análises.'
      );

    const response = await fetch(`http:127.0.0.1:3333/upload-analysis`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${TOKEN}`,
      },
      body: formData,
    });
    const feedback = (await response.json()) as IFeedback;

    if (!feedback.ok) throw new Error(feedback.message);
    return feedback;
  } catch (err: unknown) {
    console.log(err);
    if (err instanceof Error)
      return { ok: false, message: err.message } as IFeedback;
  }
}
