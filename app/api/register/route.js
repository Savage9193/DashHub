import { connectToMongoDB } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import {Users} from "@/app/lib/models"

export async function POST(req) {
    try{
        const {username,email,password}=await req.json();
        const hashedPassword=await bcrypt.hash(password,10);

        await connectToMongoDB();
        await Users.create({username,email,password:hashedPassword});

        return NextResponse.json({message:"User registered."},{status:201});
    }catch (error){
        return NextResponse.json(
            {
                message:"An error occurred while registering the user"
            },{status:500}
        );
    }
}


