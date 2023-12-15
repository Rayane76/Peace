import connectToDB from "@/database";
import Section from "@/models/section";
import { NextResponse } from "next/server";

export async function POST(req){

    try {
        await connectToDB();
        const {titleofSec} = await req.json();
        console.log(titleofSec);

        const result = await Section.insertMany({
            title: titleofSec,
            topics: [],
        })

        return NextResponse.json({
            success: true,
            message: "Section Added"
          });
       
      } catch (e) {
        console.log(e);
    
        return NextResponse.json({
          success: false,
          message: "Something went wrong!",
        });
      }
    }
    

