const useAuth = {
  isLoggedIn: true,
  user: {
    uid: 1,
    email: "bechegoyen@gmail.com",
    name: "Bryan Echegoyen",
    comuna: 1,
    region: 13,
    direccion: "Amunategui 573 depto 1801",
  },
  authenticate: (cb) => {
    useAuth.isLoggedIn = true;
    setTimeout(cb, 300);
  },
  signout: (cb) => {
    useAuth.isLoggedIn = false;
    setTimeout(cb, 300);
  },
};
export default useAuth;
