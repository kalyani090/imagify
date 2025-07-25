import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: 'Not Authorized. Login Again' });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    if (tokenDecode.id) {
      req.userId = tokenDecode.id; // ✅ safe and correct
      next(); // ✅ go to the next handler
    } else {
      return res.json({ success: false, message: 'Not Authorized. Login Again' });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default userAuth;
