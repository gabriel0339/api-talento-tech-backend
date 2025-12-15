import { ProductsService } from "../services/products.service.js";

"obtiene la lista completa de productos y devuelve la lista en formato JSON"
export const getProducts = async (req, res) => {
  const products = await ProductsService.getAll();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await ProductsService.getById(req.params.id);
  if (!product) return res.status(404).json({ message: "Producto no encontrado" });
  res.json(product);
};

export const createProduct = async (req, res) => {
  const id = await ProductsService.create(req.body);
  res.status(201).json({ id });
};

export const deleteProduct = async (req, res) => {
  await ProductsService.delete(req.params.id);
  res.json({ message: "Producto eliminado" });
};
