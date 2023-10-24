import { Product } from "@/util/model/product";
import { connectDB } from "@/util/mongo";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();

  const data = await Product.find();
  return NextResponse.json(
    { message: "All products returns", success: true, products: data },
    { status: 202 }
  );
}

export async function POST(request) {
  let data = await request.json();
  if (!data.name) {
    return NextResponse.json(
      { message: "Name is missing", success: false },
      { status: 401 }
    );
  }
  if (!data.price) {
    return NextResponse.json(
      { message: "Price is missing", success: false },
      { status: 401 }
    );
  }
  if (!data.brand) {
    return NextResponse.json(
      { message: "Brand is missing", success: false },
      { status: 401 }
    );
  }
  if (!data.stock) {
    return NextResponse.json(
      { message: "Stock is missing", success: false },
      { status: 401 }
    );
  }
  if (!data.category) {
    return NextResponse.json(
      { message: "Category is missing", success: false },
      { status: 401 }
    );
  }

  await connectDB();

  const createdData = await new Product(data);
  await createdData.save();

  return NextResponse.json(
    { message: "Product created", success: true, products: createdData },
    { status: 201 }
  );
}
