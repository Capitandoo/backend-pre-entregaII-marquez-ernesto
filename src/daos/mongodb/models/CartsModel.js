import mongoose from "mongoose";

const cartsSchema = new mongoose.Schema({
  products: {
    type: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
        },
        quantity: Number,
      },
    ],
    default: [],
    require: true,
  },
});

export const CartsModel = mongoose.model("carts", cartsSchema);
