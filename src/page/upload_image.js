import upload from "../asset/image/upload.png"
import React, { useState,useRef } from "react";
const UploadImage = ({title,bottom,pick})=>{
    const inputRef = useRef(null);
    const [image,setImage] = useState()
    const handleButtonClick = () => {
      if (inputRef.current) {
        inputRef.current.click();
      }
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            pick()
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
                alignItems:"center"
            }}
        >
            <h2 style={{color:"rgba(255, 255, 255, 0.7)"}}>{title}</h2>
            {
                image?
                <div style={{height:"320px",width:"450px",display:"flex",alignItems:'center',justifyContent:"center"}}>
                    <img src={image} alt="Selected Image" style={{height:"320px",width:"auto",maxWidth:"450px"}}/>
                </div>
                :<div 
                    onClick={handleButtonClick}
                    style={{height:"320px",width:"450px",background:"black",display:"flex",justifyContent:"center",alignItems:"center",}}>
                    <input
                    style={{ display: "none" }}
                    id="file_avatar"
                    type="file"
                    name="file"
                    accept=".jpg, .jpeg, .png, .jfif"
                    onChange={handleImageChange}
                    ref={inputRef}
                    />
                    <img src={upload} style={{paddingRight:"10px"}}/>
                    <div>
                        <span style={{color:"#FFFFFF",paddingRight:"5px"}}>Drag any image/video here or</span>
                        <span style={{color:"#00F0FF"}}>Upload a file</span>
                    </div>
                </div>
            }
            <div style={{display:"flex",alignItems:"center",marginTop:"5px"}}>
                <div style={{height:"1px",width:"120px",background:"rgba(255, 255, 255, 0.4)"}}></div>
                <span style={{paddingLeft:"10px",paddingRight:"10px"}}>OR</span>
                <div style={{height:"1px",width:"120px",background:"rgba(255, 255, 255, 0.4)"}}></div>
            </div>
            <div style={{height:"50px",width:"450px",background:"black",marginTop:"5px",display:"flex",alignItems:"center"}}>
                <span style={{color:"rgba(255, 255, 255, 0.7)",paddingLeft:"20px"}}>{bottom}</span>
            </div>
        </div>
    )
}
export default UploadImage