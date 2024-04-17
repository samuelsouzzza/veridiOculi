// import { useRouter } from 'next/navigation';
// import { UseGlobalContext } from '@/global/GlobalContext';
// import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

// const { setModalActions } = UseGlobalContext();
// const router = useRouter();

// export const verifySession = () => {
//   function getSession() {
//     router.push('/');
//     if (localStorage.getItem('userLogged_vo')) {
//       setModalActions({
//         type: 'ok',
//         icon: faArrowRightToBracket,
//         message:
//           'Você precisa iniciar uma sessão para ter acesso aos recursos da plataforma',
//         onOk: () => router.push('/'),
//       });
//     }
//   }

//   function cleanSession() {
//     localStorage.removeItem('userLogged_vo');
//   }

//   return { getSession, cleanSession };
// };
