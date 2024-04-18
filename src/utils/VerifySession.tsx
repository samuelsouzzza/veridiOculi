import { useRouter } from 'next/navigation';
import { UseGlobalContext } from '@/global/GlobalContext';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

export const VerifySession = () => {
  const { setModalActions } = UseGlobalContext();
  const router = useRouter();

  function getSession() {
    if (!localStorage.getItem('userLogged_vo')) {
      setModalActions({
        type: 'ok',
        icon: faArrowRightToBracket,
        message:
          'Você precisa iniciar uma sessão para ter acesso aos recursos da plataforma',
        onOk: () => router.push('/login'),
      });
    }
  }

  function cleanSession() {
    localStorage.removeItem('userLogged_vo');
  }

  return { getSession, cleanSession };
};
