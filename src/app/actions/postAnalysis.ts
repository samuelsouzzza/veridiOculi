'use server';

export async function postAnalysis(formData: FormData): Promise<void> {
  const newAnalysis = {
    species_name: formData.get('txt_species_name') as string,
    imgs: formData.getAll('txt_imgs_analysis'),
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(newAnalysis);
      resolve();
    }, 3000);
  });
}
