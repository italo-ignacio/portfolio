import jwt from "jsonwebtoken";
import { usersRepo } from "../../../src/database/helpers/users-repo";

interface TokenPayload {
  id: number;
  name: String;
  email: String;
  is_admin: boolean;
  iat: number;
  exp: number;
}
export default async function loginVerification(authorization: string) {
  const [, token] = authorization.split(" ");

  try {
    const da = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, name, email, is_admin } = da as TokenPayload;

    const userr = usersRepo.find(
      (x) =>
        x.id === id &&
        x.name === name &&
        x.email === email &&
        x.is_admin === is_admin
    );

    if (userr) {
      return { id, name, email, is_admin, patrimonies: userr.patrimonies };
    }

    return;
  } catch (e) {
    return;
  }
}
