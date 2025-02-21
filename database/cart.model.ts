import { model, models, Schema } from "mongoose";
import UserModel from "./user.model";

interface CartI {
  categoryName: string;
  productId: string;
  ownerId: Schema.Types.ObjectId;
  price: number;
  quantity?: number;
}

const CartSchema = new Schema<CartI>({
  categoryName: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: UserModel,
  },
});

const CartModel = models.Cart || model("Cart", CartSchema);
export default CartModel;
