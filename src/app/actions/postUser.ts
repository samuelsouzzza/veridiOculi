'use server';

interface INewUser {
  complete_name: string;
  cpf: number;
  email: string;
  confirm_password: string;
}

export async function postUser(formData: FormData): Promise<INewUser> {
  const newUser = {
    complete_name: formData.get('txt_complete_name') as string,
    cpf: Number(formData.get('txt_cpf')),
    email: formData.get('txt_email') as string,
    confirm_password: formData.get('txt_confirm_password') as string,
  };

  return newUser;
}
