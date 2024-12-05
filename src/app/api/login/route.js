import { NextRequest, NextResponse } from "next/server";
import { User } from "@/app/lib/models";
import jwt from "jsonwebtoken";
import { connectToDb } from "@/app/lib/utils";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    connectToDb();
    // Check if user exists or not --->
    const user = await User.findOne({ email: email });
    if (!user) {
      return NextResponse.json({ error: "user not exists!!" });
    } else {
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return NextResponse.json({ error: "Invalid email or password !!" });
      } else {
        if (user.isAdmin) {
          // create token data --->
          const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
          };

          // create jsonwebtoken --->
          const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
            expiresIn: "1d",
          });

          // const response = NextResponse.redirect(
          //   new URL("/dashboard", request.url)
          // );

          const response = NextResponse.json({
            message: "login successfull !!",
            success: true,
          });

          response.cookies.set("token", token, {
            httpOnly: true,
          });

          return response;
        } else {
          return NextResponse.json({
            error: "You are not allowed to login here.",
          });
        }
      }
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
