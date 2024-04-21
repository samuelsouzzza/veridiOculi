'use server';

export async function postLogin(formData: FormData): Promise<void> {
  const user = {
    email: formData.get('txt_email') as string,
    password: formData.get('txt_password') as string,
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(user);
      resolve();
    }, 3000);
  });
}
