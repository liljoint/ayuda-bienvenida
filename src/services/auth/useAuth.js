const useAuth = {
  isLoggedIn: true,
  user: {
    uid: 1,
    email: "test@gmail.com",
    name: "Test User",
    comuna: 1,
    region: 13,
    direccion: "Standard adress #123 depto 1801",
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
