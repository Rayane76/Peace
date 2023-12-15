'use client'

import "../../../styles/styles.css"

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import axios from "axios";



export function SideBar(props){

  const [allSections,setAllSections] = useState(null); 


  useEffect(()=>{
    getData();
  },[]);

  const getData = async ()=>{
    const result = await axios.get("/api/sections/getSections");
    setAllSections(result.data.data);
    console.log(allSections);
    console.log(result.data.data);

  } 

  
   const router = useRouter();
    return(
        <>
    <div className="sideBar">

    {allSections === null ? "" : 
     allSections.map((section)=> {
      return(
        <>
      <div key={section.id}> 
      <button
      style={{
        all: "unset",
        width: "100%",
        height: "50px",
        textAlign: "center",
        paddingTop: "8px",
      }}
      onClick={()=>{
        router.push(props.path + section.title);
      }}
    >
      {section.title}
    </button>
    <hr></hr>
    </div> 
    </>
      )
     })
    }
  </div>
  </>
    )
}