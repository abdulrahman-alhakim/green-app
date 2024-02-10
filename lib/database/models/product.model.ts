import { Schema, model, models } from "mongoose";

export interface IProduct extends Document {
  _id: string;
  title: string;
  description?: string;
  imageUrl: string;
  isDiscount?: boolean;
  ingredients?: string;
  isAvailable: boolean;
  price: string;
  url?: string;
  category: { _id: string; name: string };
  organizer: { _id: string; firstName: string; lastName: string };
}

const ProductSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  imagUrl: { type: String, required: true },
  isDiscount: { type: Boolean },
  ingredients: { type: String },
  isAvailable: { type: Boolean, required: true },
  price: { type: String, required: true },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
