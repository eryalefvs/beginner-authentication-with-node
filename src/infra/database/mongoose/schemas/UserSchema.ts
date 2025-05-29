import { Schema, model, Document } from "mongoose";
import { IUser } from "src/modules/user/entities/IUser";

const UserSchema = new Schema<IUser>({
    name: { type: String, required: true, trim: true },
    email: { type: String,required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const UserModel = model<IUser>("User", UserSchema);

export default UserModel;