export async function postUser(formData: FormData): Promise<void> {
  const newUser = {
    complete_name: formData.get('txt_complete_name') as string,
    cpf: formData.get('txt_cpf') as string,
    email: formData.get('txt_email') as string,
    confirm_password: formData.get('txt_confirm_password') as string,
  };

  console.log(newUser);

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Esperando...');
      resolve(); // Resolve a promessa após 3 segundos
    }, 3000);
  });
}
