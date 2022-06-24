export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json({
        success: true,
        mg: process.env.MONGODB_URI,
        md: process.env.TOKEN_SECRET,
      });
      break;

    default:
      res.status(400).json({ error: true, msg: "URL does not exist" });
      break;
  }
}
