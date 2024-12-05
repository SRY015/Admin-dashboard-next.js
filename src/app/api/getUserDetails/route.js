import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(request) {
  const token = request.cookies.get("token");
  if (token) {
    const decodedToken = jwt.verify(token.value, process.env.JWT_SECRET);
    return NextResponse.json(decodedToken, { status: 200 });
  } else {
    return NextResponse.json(
      { message: "token not found !!" },
      { status: 400 }
    );
  }
}
