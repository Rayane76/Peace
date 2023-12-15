import connectToDB from "@/database";
import { NextResponse } from "next/server";
import AdminAccount from "@/models/adminAccount";
import { cookies } from 'next/headers'


export async function POST(req) {
  try {
    await connectToDB();
    const { username, password } = await req.json();

    const verifyUser = await AdminAccount.findOne({
      username: username,
      password: password,
    });

    if(verifyUser) {
        cookies().set('logged_peace','yes');
        return NextResponse.json({
            success: true,
            message: "Logged in successfully"
        });
    }
    else{
        return NextResponse.json({
            success: false,
            message: "Something went wrong!",
          });
        
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong!",
    });
  }
}
