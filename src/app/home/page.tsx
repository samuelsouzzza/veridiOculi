import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veridi Oculi • Home',
  description: 'Página inicial da Veridi Oculi',
};

export default function homePage() {
  return <h1>Página Home</h1>;
}
