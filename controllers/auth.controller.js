import jwt from "jsonwebtoken";
import { AuthService } from "../services/auth.service.js";

 "Valida las credenciales del usuario y, si son correctas,genera un JSON Web Token para autenticación"
export const login = (req, res) => {
  const { email, password } = req.body;

  if (!AuthService.validateUser(email, password)) {
    return res.status(401).json({ message: "Credenciales inválidas" }); " Valida el usuario mediante el servicio de autenticación yretorna falso si las credenciales son inválidas"
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });   
  res.json({ token });
};
