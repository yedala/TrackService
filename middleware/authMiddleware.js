import jwt from "jsonwebtoken";
// import { findById } from "../models/userModel";
import asyncHandler from "express-async-handler";

const authGaurd = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
      //   req.user = await findById(decoded.id).select("-password");
      req.userId = decoded.id;
      // console.log(decoded);
      next();
    } catch (err) {
      res.status(401);
      throw new Error("Not Authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not Authorized, token failed");
  }
});

export default authGaurd;
