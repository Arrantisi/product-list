import { prisma } from "@/lib/prisma";
import { ProductSchema } from "@/lib/schemas";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: Promise<{ productId: string }> }
) => {
  const id = (await params).productId;
  const product = await prisma.product.findUnique({
    where: { id },
  });
  return NextResponse.json(product, { status: 200 });
};

export const PATCH = async (
  req: Request,
  { params }: { params: Promise<{ productId: string }> }
) => {
  const body: ProductSchema = await req.json();
  const { name, brand, catagory, description, price } = body;
  const id = (await params).productId;

  try {
    await prisma.product.update({
      where: { id },
      data: { name, brand, catagory, description, price },
    });
    return NextResponse.json({ msg: "product telah di buat" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ msg: `syntax error ${error}` }, { status: 500 });
  }
};

export const DELETE = async (
  req: Request,
  { params }: { params: Promise<{ productId: string }> }
) => {
  const id = (await params).productId;
  try {
    await prisma.product.delete({
      where: { id },
    });
    return NextResponse.json(
      { msg: "product telah di hapus" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ msg: `syntax error ${error}` }, { status: 500 });
  }
};
