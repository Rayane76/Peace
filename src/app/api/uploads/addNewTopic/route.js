
import connectToDB from "@/database";
import Section from "@/models/section";
import { NextResponse } from "next/server";

export async function POST(req){

    try {
        await connectToDB();
        const {topicDetails,sectionOfTopic} = await req.json();

        let section = sectionOfTopic.charAt(0).toUpperCase() + sectionOfTopic.slice(1);

        const add = await Section.findOne({title: section});

        add.topics.push({
            title: topicDetails.title,
            desc: topicDetails.description,
            location: topicDetails.location 
        })

        add.save();

        

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
    

