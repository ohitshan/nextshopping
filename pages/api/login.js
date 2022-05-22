export default (req, res) => {
  // res.status(200).json({ id: req.query.id })
  if (req.method === 'POST') {
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure")
    res.status(200).json({ message: "ok" })
  }
}
