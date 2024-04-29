'use server';
import { IFeedback } from '@/@types/@types';

export async function postAnalysis(
  formData: FormData
): Promise<IFeedback | void> {
  try {
    const response = await fetch(`http:/127.0.0.1:3333/upload-analysis`, {
      method: 'POST',
      body: formData,
    });
    const feedback = (await response.json()) as IFeedback;

    if (!feedback.ok) throw new Error(feedback.message);
    return feedback;
  } catch (err: unknown) {
    if (err instanceof Error)
      return { ok: false, message: err.message } as IFeedback;
  }
}
