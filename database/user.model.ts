import { model, models, Schema } from "mongoose";

interface UserI {
  email: string;
  password: string;
  name: string;
}

const UserSchema = new Schema<UserI>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
});

const UserModel = models.User || model("User", UserSchema);

export default UserModel;
