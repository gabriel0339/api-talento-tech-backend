import { ProductModel } from "../models/product.model.js";

export const ProductsService = {
  getAll: () => ProductModel.getAll(),
  getById: (id) => ProductModel.getById(id),
  create: (data) => ProductModel.create(data),
  delete: (id) => ProductModel.delete(id)
};
