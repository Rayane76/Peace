"use client"

import { SideBar } from "@/app/components/sideBar";
import { useState, useEffect } from "react";
 
 
import { useParams } from 'next/navigation'
import axios from "axios";


export default function SectionsAdmin(){


  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const [pictureFile, setpictureFile] = useState(null);

  const pictureChangeHandler = event => {
      setpictureFile(event.target.files[0]);
  };

  const uploadPictureHandler = async () => {
      const pictureData = new FormData();
      pictureData.append('image', pictureFile);
      try {
          const response = await fetch('api/addImage', {
              method: 'POST',
              body: profilePicData,
          });
          const data = await response.json();
          if (!response.ok) {
              throw data;
          }
          setpictureFile(null);
      } catch (error) {
          console.log(error.message);
      }
  };







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
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h1 style={{marginBottom:"20px"}}>{section}</h1>
            <h1 style={{marginBottom:"20px"}}>Add topic</h1>
            <input id="input" type="text" style={{marginBottom:"20px"}} placeholder="add title" onChange={(e)=>{
            setTopicTitle(e.target.value);
        }}></input> 
          <input id="input" type="text" placeholder="add description" style={{marginBottom:"20px"}} onChange={(e)=>{
            setTopicDescription(e.target.value);
        }}></input> 
                  <input id="input" type="text" placeholder="add location" style={{marginBottom:"20px"}} onChange={(e)=>{
            setTopicLocation(e.target.value);
        }}></input> 

        <button style={{marginBottom:"30px"}} onClick={triggerSubmit}>Submit</button>

        <img src={createObjectURL} />
        <h4>Select Image</h4>
        <input type="file" name="myImage" onChange={pictureChangeHandler} />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadPictureHandler}
        >
          Send to server
        </button>



        </div>
        </div>

    </>
    )
}