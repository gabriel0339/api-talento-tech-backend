import jwt from "jsonwebtoken";
import { AuthService } from "../services/auth.service.js";

export const login = (req, res) => {
  const { email, password } = req.body;

  if (!AuthService.validateUser(email, password)) {
    return res.status(401).json({ message: "Credenciales inválidas" });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
};
