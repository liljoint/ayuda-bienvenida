const useAuth = {
  isLoggedIn: true,
  user: {
    email: "bechegoyen@gmail.com",
    name: "Bryan Echegoyen",
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
