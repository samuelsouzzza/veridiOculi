export const verifySession = () => {
  function getSession() {
    return localStorage.getItem('userLogged_vo') ? true : false;
  }

  function cleanSession() {
    localStorage.removeItem('userLogged_vo');
  }

  return { getSession, cleanSession };
};
