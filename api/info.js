export default function handler(req, res) {
  const uid = req.query.uid;

  if (!uid) {
    return res.status(400).json({ error: "uid missing" });
  }

  res.json({
    status: true,
    uid: uid,
    name: "Demo Player",
    level: 55,
    emotes: ["Hello", "Kick", "LOL", "Chicken Dance"],
    avatar: `https://api.multiavatar.com/${uid}.png`
  });
}
