'use client'


import { gsap } from "gsap"
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "../styles/styles.css"


export default function Home() {

  const comp1 = useRef(null);
  useLayoutEffect(()=>{
    let ctx = gsap.context(()=>{
      var tl1 = gsap.timeline();
      tl1.fromTo("#logo",{
        display:"none",
        y:250,
        opacity:0
      },{
        opacity:1,
        y:0,
        display:"block",
        duration:"2",
      }).to("#logo",{
        display:"none",
        opacity:"0",
        duration:0.5,
        stagger:1,
      }).
      fromTo("#quote",{
        display:"none",
        opacity:0,
      },{
        display:"block",
        opacity:"1",
        duration:2,
        stagger:2
      })
      .to("#intro",{
        display:"none",
        opacity:"0",
        delay:1.5,
        stagger:1,
        duration:1
      }).to("#home",{
        display:"block",
        opacity:1,
        duration:0.2
      })
    })


    return () => ctx.revert();
  },[])
  return (
    <>
    <div id="intro" ref={comp1} style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
    <img id="logo" src="symbol.png" style={{height:"90px",display:"none"}}></img>
    <h1 id="quote" style={{display:"none"}}>Random quote of peace</h1>
    </div>

    <div id="home" style={{display:"none",opacity:"0"}}>
       <div className="sideBar">
        <button style={{all:"unset",width:"100%",height:"50px",textAlign:"center",paddingTop:"8px"}}>Wars</button>
        <hr></hr>
        <button style={{all:"unset",width:"100%",height:"50px",textAlign:"center"}}>Hunger</button>
        <hr></hr>
        <button style={{all:"unset",width:"100%",height:"50px",textAlign:"center"}}>Natural Disasters</button>
        <hr></hr>
       </div>
    </div>
    </>
  )
}
