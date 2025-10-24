export default function handler(req, res) {
  return res.status(200).json({
    message: "Hello from Vercel, tôi là Hiếu!,
    time: new Date().toISOString(),
  });
}
