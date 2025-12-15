import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import productsRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/products", productsRoutes);
app.use("/auth", authRoutes);

app.get("/test", (req, res) => {
  res.json({ message: "API OK" });
});

// 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// 👇 SOLO local
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
  );
}

export default app;
