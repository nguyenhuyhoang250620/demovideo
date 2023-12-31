import logo from './logo.svg';
import './App.css';
import SideBar from './page/sidebar';
import Upload from './page/upload';
import Search from './page/search';
import language from "../src/asset/image/language.png"
import UploadImage from './page/upload_image';
import React, { useState,useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Socket from './page/socket';
const Home=()=> {
  const [img,setimg] = useState(false)
  const [vid,setvid] = useState(false)
  const [senvideo,SetSenvide] = useState()
  const navigate = useNavigate();
  const [postVideo,setPostVideo]= useState()
  const pickVideo =()=>{
    setvid(true)
  }
  const pickImage = ()=>{
    setimg(true)
  }
 
  const getDataVideo = (data)=>{
    SetSenvide(data)
  }
  const getVideoPost = (data)=>{
    setPostVideo(data)
  }

  const goToResultScreen = async () => {
    // console.log(postVideo)
    // const formData = new FormData();
    // formData.append("video",postVideo);
    // await axios.post("http://123.24.199.156:18080/ekyc/video_face_scan",
    // formData,
    // {
    //   headers:{
    //     // "Content-Type": "application/json",
    //     "Content-Type": "multipart/form-data",
    //     // "Authorization": `Bearer ${token}`,
    //     "Access-Control-Allow-Headers":"*",
    //     "Access-Control-Allow-Origin":"*",
    //   },
    // }).then((value)=>{
    //   console.log(value)
    // })
    // formData.append("image", data.id);
    if(vid ===true){
      navigate('/single',{state:{data:senvideo,img:img}});
    }
  };
  return (
    <div style={{
      height:"100vh",
      width:"100vw",
      display:"flex"
    }}>
      <Socket/>
      <SideBar/>
        <div style={{
            height:"100vh",
            width:"100%",
            background:"#101016",
            display:"flex",
            flexDirection:"column",
          }}>
          <div style={{height:"60px",width:"100%",borderBottom:"1px solid rgba(255, 255, 255, 0.4)",overflow:"hidden",display:"flex",justifyContent:"space-between"}}>
            <h4 style={{color:"rgba(255, 255, 255, 0.7)",marginLeft:"10px"}}>OBJECT SEARCH</h4>
            <div style={{height:"60px",display:"flex",alignItems:"center",marginRight:"30px"}}>
              <div style={{
                height:"30px",
                width:"90px",
                background:"#00F0FF",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",marginRight:"10px",
                borderRadius:"6px"
              }}>Contact us</div>
              <img src={language}/>
            </div>
          </div>
          <div style={{
            height:"60vh",
            width:"100%",
            background:"#101016",
            display:"flex",
            justifyContent:"space-evenly"
          }}>
            
            <Upload videoPost={getVideoPost} video={getDataVideo} title="IMAGE/VIDEO SOURCE (INPUT)" bottom="Paste image/video link" pick={(data)=>pickVideo()}/>
            <UploadImage title="HUMAN SEARCH TARGET" bottom="Paste image link" pick={()=>pickImage()}/>
            <Search title="VEHICLE SEARCH TARGET"/>
          </div>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div 
              onClick={goToResultScreen}
              style={{
                background:(img === true  || vid ===true)?"#00F0FF":"#212228",
                height:"40px",width:"100px",
                color:(img === true  || vid ===true)?"black":"rgba(255, 255, 255, 0.7)",
                display:"flex",
                alignItems:'center',
                justifyContent:'center',
                borderRadius:"6px",
                cursor:"pointer"
                }}>
              Search
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
