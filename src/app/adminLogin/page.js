"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function LogAdmin() {

  const router = useRouter();

  const formData = {
    username: "",
    password: "",
  };

  const [errorMessage,setErrorMessage] = useState(null);

  const [loginInfo, setLoginInfo] = useState(formData);

  const handleSubmit = async () => {
    console.log(loginInfo);
    await axios.post("/api/uploads/loginUploads",{
      username: loginInfo.username,
      password: loginInfo.password
    }).then(function (response) {
      console.log(response.data.success);
      if (response.data.success === true){
         router.push(`/adminUploads`);
      }
      else{
        setErrorMessage("Wrong informations!");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <>
      <div className="d-grid justify-content-center align-items-center" style={{marginTop:"10%"}}>
      <h1>Login as Admin</h1>
      <label>Username:</label>
      <input
        type="text"
        name="username"
        value={loginInfo["username"]}
        onChange={(e) =>
          setLoginInfo({
            ...loginInfo,
            username: e.target.value,
          })
        }
      ></input>

      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={loginInfo["password"]}
        onChange={(e) =>
          setLoginInfo({
            ...loginInfo,
            password: e.target.value,
          })
        }
      ></input>
      <button onClick={handleSubmit} style={{marginTop:"20px"}}>Submit</button>
      <p>{errorMessage}</p>
      </div>
    </>
  );
}
