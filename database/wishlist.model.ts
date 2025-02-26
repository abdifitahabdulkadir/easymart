import { model, models, Schema } from "mongoose";

interface WishListI {
  categoryName: string;
  productId: string;
  ownerId: Schema.Types.ObjectId;
  price: number;
}

const WishListSchema = new Schema<WishListI>({
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
  ownerId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const WishListModel = models.WishList || model("WishList", WishListSchema);
export default WishListModel;
