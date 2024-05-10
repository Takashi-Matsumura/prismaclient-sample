import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: Request, res: NextResponse) => {
  const { name, email } = await req.json();

  const new_user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  console.log("Server API:");
  console.log(new_user);
  return NextResponse.json(new_user);
};
