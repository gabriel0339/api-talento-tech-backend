export const AuthService = {
  validateUser: (email, password) => {
    return email === "admin@empresa.com" && password === "supersecret";
  }
};
