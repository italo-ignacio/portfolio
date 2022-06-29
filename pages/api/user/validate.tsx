import loginValidate from "../auth/loginValidate";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { authorization } = req.headers;
        const { id = "", is_admin = "", email = "" } = req.body;
        if (id === "" || is_admin === "" || email === "") {
          return res.status(401).json({ error: true, msg: "Login required" });
        }
        if (!authorization) {
          return res.status(401).json({ error: true, msg: "Login required" });
        }
        const data = await loginValidate(authorization, id, is_admin, email);
        if (!data) {
          return res.status(401).json({ error: true, msg: "Login required" });
        }

        res.status(200).json(data);
      } catch (error) {
        res.status(401).json({ error: true, msg: "Login required" });
      }

      break;

    default:
      res.status(400).json({ error: true, msg: "URL does not exist" });
      break;
  }
}
