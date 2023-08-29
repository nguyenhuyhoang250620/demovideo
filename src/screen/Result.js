import SideBarHome from "../page/sidebarHome"
import language from "../asset/image/language.png"
import headerSearch from "../asset/image/header_search.png"
import { useLocation } from "react-router-dom"
import { useRef,useState,useEffect } from "react"
import avatar from "../asset/image/avatar.jpg"
import pointDefaut from "../asset/image/point_default.png"
import pointActive from "../asset/image/point_active.png"
import ResultSingle from "./ResultSingle"
import ResultTime from "./ResuiltTime"
import BoundingBoxDiv from "../page/bouding";
const ResultScreen =()=>{
  const location = useLocation();
  const videoRef = useRef(null);
  // const [selectedTime, setSelectedTime] = useState(0);
  const [selectedTime, setSelectedTime] = useState();
  const [swich,setSwich] = useState(true)
  const [detect,setDetect]= useState(false)
  const [bouding,setBounding] = useState([])
  
  const dataJson = location.state.dataAll;

  console.log("location.state.img",dataJson.ID0)

  const handleTimeChange = (time,second,bouding) => {
    setDetect(false)
    console.log(second)
    setSelectedTime(second[0]);
    console.log(bouding)
    setBounding(bouding)
    
    videoRef.current.currentTime = second;
  }
  function formatSecondsToMMSS(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    return `${formattedMinutes}:${formattedSeconds}`;
}

    return(
        <div style={{
            height:"100vh",
            width:"100vw",
            display:"flex"
          }}>
            <SideBarHome/>
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
          <img src={headerSearch} onClick={()=>setSwich(!swich)}/>
          {
            location.state.img?<>
               {
                swich?
                <div>
                <div style={{
              width:"100%",
              height:"66vh",
              display:"flex",
              marginTop:"20px",
              justifyContent:"center",
              alignItems:"center",
              position:"relative"
              }}>
                  <video ref={videoRef} controls  style={{height:"600px",width:"1067px"}}>
                      <source src={location.state.data} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
                  {bouding.length>0 && <BoundingBoxDiv title="ID0" x={bouding[0]} y={bouding[1]} width={bouding[2]-bouding[0]} height={bouding[3]-bouding[1]} scale={0.6} top={0} left={350}/>}
                  
            </div>
            <div style={{padding:"20px"}}>
              <div style={{
                height:"15vh",
                width:"100%",
                background:"#212228",
                display:"flex",
                alignItems:"center"
              }}>
                <div style={{
                  overflow:"hidden",
                  height:"100px",
                  width:"100px",
                  display:"flex",
                  alignItems:"center",
                  objectFit:"contain",
                  borderRadius:"50%",
                  justifyContent:"center",
                  marginLeft:"10px",
                  border:"1px solid #ccc"
                  }}>
                  <img
                    style={{height:"80px",width:"auto"}}
                    
                    src={dataJson.ID0[0][2]}
                  />
                </div>
                <div style={{
                  height:"100%",
                  width:"100%",
                  display:"flex",
                  alignItems:"center",
                  position:"relative",
                  paddingRight:"40px"
                }}>
                  <div
                    style={{height:"5px",
                    width:"100%",
                    marginLeft:"30px",
                    background:"#464852",
                    
                  }}
                  >
    
                  {dataJson.ID0.map(point => (
                    <div
                      key={point.id}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "absolute",
                        top: 28,
                        left: point[0]*100
                      }}
                      onClick={() => handleTimeChange(formatSecondsToMMSS(point[0]),point[0],point[1])}
                    >
                      <img src={point[0][0] === selectedTime? pointDefaut:pointActive} style={{ marginBottom: "6px" }} />
                      <span style={{ color: "#FFFFFF" }}>{formatSecondsToMMSS(point[0])}</span>
                    </div>
                  ))}
                  </div>
                </div>
            </div>
            </div>
                </div>:<ResultSingle
                      data={dataJson}
                      video={location.state.data}
                    />
              }
            </>:<ResultTime
                data={dataJson}
                video={location.state.data}
              />
          }
        </div>
        </div>
    )
}   
export default ResultScreen