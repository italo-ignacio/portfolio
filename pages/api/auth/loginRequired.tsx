import jwt from "jsonwebtoken";
import User from "../../../src/database/models/User";

interface TokenPayload {
  id: String;
  name: String;
  email: String;
  is_admin: boolean;
  iat: number;
  exp: number;
}
export default async (authorization: string) => {
  const [, token] = authorization.split(" ");

  try {
    const da = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, name, email, is_admin } = da as TokenPayload;

    const user = await User.findOne({
      id,
      email,
      is_admin,
    });

    if (!user) {
      return;
    }
    return { id, name, email, is_admin };
  } catch (e) {
    return;
  }
};
