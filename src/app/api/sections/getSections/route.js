import connectToDB from "@/database";
import { NextResponse } from "next/server";
import Section from "@/models/section";

export async function GET(req, res){

    try {
        await connectToDB();
        const result = await Section.find({});

        return NextResponse.json({
            data: result,
            success: true,
            message: "!",
          });
        
       
      } catch (e) {
        console.log(e);
    
        return NextResponse.json({
          success: false,
          message: "Something went wrong!",
        });
      }
    }