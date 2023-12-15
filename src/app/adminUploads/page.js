"use client"

import { useState } from "react"
import { SideBar } from "../components/sideBar"
import axios from "axios";

export default function Uploads(){
    const [sectionTitle,setSectionTitle] = useState(null);

    const triggerSubmit = async () =>  {
        const inputField = document.getElementById("input");
        inputField.value="";
       console.log(sectionTitle); 
      await axios.post("api/uploads/addNewSection",{
        titleofSec: sectionTitle
      }).then(function (response) {
        console.log(response.data.success);
      })
      .catch(function (error) {
        console.log(error);
      });
    };
    

    return(
        <>
        
        <SideBar path={"/adminUploads/section/"} />
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{marginTop:"20%"}}>
        <h1>add section</h1>
        <input id="input" type="text" placeholder="add title" onChange={(e)=>{
            setSectionTitle(e.target.value);
            console.log(sectionTitle)
        }}></input> 
        <button onClick={triggerSubmit}>Submit</button>
        </div>
        </div>
        </>

    )
   
    }