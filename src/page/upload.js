import upload from "../asset/image/upload.png"
import React, { useState,useRef } from "react";
import close from "../asset/image/close.png"
const Upload = ({title,bottom,pick,video})=>{
    const [videodata,setVideodata] = useState()
    const [hover,setHover] = useState(true)
    const videoRef = useRef(null);
    const inputRef = useRef(null);

    const handleButtonClick = () => {
      if (inputRef.current) {
        inputRef.current.click();
      }
    };
    const handleVideoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setVideodata(URL.createObjectURL(file));
            pick()
            video(file)
        }

      };

    return(
        <div 
            style={{
                height:"500px",
                width:"500px",
                background:"#212228",
                overflow:"hidden",
                margin:"10px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"start",
                alignItems:"center",
                position:"relative"
            }}
        >
            <h2 style={{color:"rgba(255, 255, 255, 0.7)"}}>{title}</h2>
            {
                videodata?
                    <div style={{height:"320px",width:"450px"}}>
                        <video ref={videoRef} controls style={{height:"320px",width:"auto",maxWidth:"450px"}}>
                            <source src={videodata} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div 
                        onClick={()=>{
                            setVideodata()
                        }}
                        style={{
                            position:"absolute",
                            top:10,
                            right:10,
                            cursor:"pointer"
                        }}>
                            <img src={close}/>
                        </div>
                    </div>
                :<div 
                    onClick={handleButtonClick}
                    style={{height:"320px",width:"450px",background:"black",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
                    <input type="file" accept="video/*" onChange={handleVideoChange} style={{ display: "none" }}  ref={inputRef}/>
                    <img src={upload} style={{paddingRight:"10px"}}/>
                    
                    <div>
                        <span style={{color:"#FFFFFF",paddingRight:"5px"}}>Drag any image/video here or</span>
                        <span style={{color:"#00F0FF"}}>Upload a file</span>
                    </div>
                </div>
            }
            <div style={{display:"flex",alignItems:"center",marginTop:"5px"}}>
                <div style={{height:"1px",width:"120px",background:"rgba(255, 255, 255, 0.4)"}}></div>
                <span style={{paddingLeft:"10px",paddingRight:"10px",color:"rgba(255, 255, 255, 0.4)"}}>OR</span>
                <div style={{height:"1px",width:"120px",background:"rgba(255, 255, 255, 0.4)"}}></div>
            </div>
            <div style={{height:"50px",width:"450px",background:"black",marginTop:"5px",display:"flex",alignItems:"center"}}>
                <span style={{color:"rgba(255, 255, 255, 0.7)",paddingLeft:"20px"}}>{bottom}</span>
            </div>
        </div>
    )
}
export default Upload