import { Product } from "@/util/model/product";
import { connectDB } from "@/util/mongo";
import { NextResponse } from "next/server";

export async function GET(req, props) {
    const name = props.params.name;
    await connectDB();
    const data = await Product.find({})

    let productData = data.filter((item)=> item.name === name )
    if (productData.length === 0) {
        return NextResponse.json({message: "No product found.", success: false}, {status: 402})
    }
    return NextResponse.json({message: "Product get successfully", success: true, product: productData[0]}, {status: 202})
}