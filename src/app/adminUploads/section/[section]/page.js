"use client"

import { SideBar } from "@/app/components/sideBar";
import { useState, useEffect } from "react";
 
 
import { useParams } from 'next/navigation'
import axios from "axios";


export default function SectionsAdmin(){
    const params = useParams();
    const section = params.section;
    const [topicTitle,setTopicTitle] = useState(null);
    const [topicDescription,setTopicDescription] = useState(null);
    const [topicLocation,setTopicLocation] = useState(null);

    const triggerSubmit = async () =>  {
        const inputField = document.getElementById("input");
        inputField.value="";
        const topic = {
            title: topicTitle,
            description: topicDescription,
            location: topicLocation
        }

      await axios.post("../../../api/uploads/addNewTopic",{
        topicDetails: topic, sectionOfTopic: section
      }).then(function (response) {
        console.log(response.data.success);
      })
      .catch(function (error) {
        console.log(error);
      });
    };
    return(
    <>
       
        <SideBar path={"adminUploads"}/>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div>
            <h1>{section}</h1>
            <h1>Add topic</h1>
            <input id="input" type="text" placeholder="add title" onChange={(e)=>{
            setTopicTitle(e.target.value);
        }}></input> 
          <input id="input" type="text" placeholder="add description" onChange={(e)=>{
            setTopicDescription(e.target.value);
        }}></input> 
                  <input id="input" type="text" placeholder="add location" onChange={(e)=>{
            setTopicLocation(e.target.value);
        }}></input> 
        <button onClick={triggerSubmit}>Submit</button>

        </div>
        </div>

    </>
    )
}