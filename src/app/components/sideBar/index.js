'use client'

import "../../../styles/styles.css"

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import axios from "axios";




export async function SideBar(){
    const [allSections,setAllSections] = useState(null); 

    useEffect(()=>{
     getSections();
    },[]);
 
   const getSections = async () => {
     const result = await axios.get("/api/section");
     setAllSections(result.data.data);
   }   
   const router = useRouter();
    return(
        <>
    <div className="sideBar">
    <button
      style={{
        all: "unset",
        width: "100%",
        height: "50px",
        textAlign: "center",
        paddingTop: "8px",
      }}
      onClick={()=>{
        router.push("/section/war");
      }}
    >
      Wars
    </button>
    <hr></hr>
    <button
      style={{
        all: "unset",
        width: "100%",
        height: "50px",
        textAlign: "center",
      }}
    >
      Hunger
    </button>
    <hr></hr>
    <button
      style={{
        all: "unset",
        width: "100%",
        height: "50px",
        textAlign: "center",
      }}
    >
      Natural Disasters
    </button>
    <hr></hr>
    <button
      style={{
        all: "unset",
        width: "100%",
        height: "50px",
        textAlign: "center",
      }}
    >
      Health Crisis
    </button>
  </div>
  </>
    )
}