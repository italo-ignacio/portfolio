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
export default async function loginValidate(
  authorization: string,
  id1: number,
  is_admin1: boolean,
  email1: string
) {
  const [, token] = authorization.split(" ");

  try {
    const da = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, name, email, is_admin } = da as TokenPayload;

    if (id != id1) {
      return;
    }
    if (is_admin != is_admin1) {
      return;
    }
    if (email != email1) {
      return;
    }
    if (usersRepo.find((x) => x.id === id && x.is_admin === is_admin)) {
      return { id, name, email, is_admin };
    }

    return;
  } catch (e) {
    return;
  }
}
