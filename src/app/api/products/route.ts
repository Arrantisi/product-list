import { prisma } from "@/lib/prisma";
import { ProductSchema } from "@/lib/schemas";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query") || "";
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "5");

  const skip = (page - 1) * limit;

  try {
    const [products, pages] = await Promise.all([
      prisma.product.findMany({
        skip,
        take: limit,
        where: {
          name: {
            contains: query,
            mode: "default",
          },
        },
      }),
      prisma.product.count({
        where: {
          name: {
            contains: query,
            mode: "default",
          },
        },
      }),
    ]);

    return NextResponse.json({ products, pages }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: `syntax error ${error}` });
  }
};

export const POST = async (req: Request) => {
  const body: ProductSchema = await req.json();

  const { name, brand, catagory, description, price } = body;

  const existingName = await prisma.product.findUnique({
    where: { name },
  });
  if (existingName)
    return NextResponse.json(
      { msg: "name product telah ada" },
      { status: 400 }
    );

  try {
    await prisma.product.create({
      data: {
        name,
        brand,
        catagory,
        description,
        price,
      },
    });
    return NextResponse.json({ msg: "product telah di buat" });
  } catch (error) {
    return NextResponse.json({ ms: `syntax error ${error}` });
  }
};
