import SideBarHome from "../page/sidebarHome"
import language from "../asset/image/language.png"
import headerSearch from "../asset/image/header_search.png"
import { useLocation } from "react-router-dom"
import { useRef,useState } from "react"
import avatar from "../asset/image/avatar.jpg"
import pointDefaut from "../asset/image/point_default.png"
import pointActive from "../asset/image/point_active.png"
import ResultTime from "./ResultTime"
const ResultScreen =()=>{
  const location = useLocation();
  const videoRef = useRef(null);
  // const [selectedTime, setSelectedTime] = useState(0);
  const [selectedTime, setSelectedTime] = useState('');
  const [swich,setSwich] = useState(true)
  const [tops,setTops] =useState()
  const [left,setLeft] = useState()
  const [heights,setHeightz] = useState()
  const [widths,setWidthz] = useState()
  const [detect,setDetect]= useState(false)
 

  const handleTimeChange = (time,second,top,left,heightz,widthz) => {
    setDetect(false)
    setSelectedTime(time);
    videoRef.current.currentTime = second;
    setTimeout(() => {
      setTops(top)
      setLeft(left)
      setHeightz(heightz)
      setWidthz(widthz)
      setDetect(true)
    }, 200);
  }
  const points = [
    { id: '1', time: '00:50',left:80,second:50,tops:230,lefts:630,height:"110px",width:"100px"},
    { id: '2', time: '05:50',left:600,second:350,tops:190,lefts:815,height:"200px",width:"200px"},
    { id: '3', time: '06:50',left:700,second:410,tops:110,lefts:850,height:"200px",width:"200px"},
    { id: '4', time: '07:50',left:1500,second:470,tops:220,lefts:500,height:"100px",width:"100px"},
    { id: '5', time: '08:00',left:1600,second:480,tops:170,lefts:540,height:"140px",width:"140px"},
  ];
  const pointstwo = [
    { id: '1', time: '00:50',left:80,second:50},
    { id: '2', time: '01:40',left:100,second:100},
    { id: '3', time: '02:30',left:200,second:150},
    { id: '4', time: '03:20',left:1500,second:200},
    { id: '5', time: '04:10',left:1600,second:250},
    { id: '6', time: '05:00',left:1600,second:300},
    { id: '7', time: '05:50',left:1600,second:350},
    { id: '8', time: '06:40',left:1600,second:400},
  ];


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
                  <video ref={videoRef} controls style={{height:"68vh",width:"auto"}}>
                      <source src={location.state.data} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
                  {(detect && swich) && <div style={{
                    position:"absolute",
                    height:heights,
                    width:widths,
                    border:"2px solid #00F0FF",
                    top:tops,
                    left:left
                  }}>
                    <div style={{color:"#00F0FF",position:"absolute",top:-23,background:"rgba(0, 0, 0, 0.6)",borderRadius:"4px"}}>Person11</div>
                  </div>}
                  
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
                  marginLeft:"10px"
                  }}>
                  <img
                    style={{height:"200px",width:"auto"}}
                    src={avatar}
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
    
                  {points.map(point => (
                    <div
                      key={point.id}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "absolute",
                        top: 28,
                        left: point.left
                      }}
                      onClick={() => handleTimeChange(point.time,point.second,point.tops,point.lefts,point.height,point.width)}
                    >
                      <img src={point.time === selectedTime? pointDefaut:pointActive} style={{ marginBottom: "6px" }} />
                      <span style={{ color: "#FFFFFF" }}>{point.time}</span>
                    </div>
                  ))}
                  </div>
                </div>
            </div>
            </div>
                </div>:<ResultTime
                      pointstwo={pointstwo}
                      handleTimeChange={handleTimeChange}
                      selectedTime={selectedTime}
                      video={location.state.data}
                      videoRef={videoRef}
                    />
              }

        
        </div>
        </div>
    )
}   
export default ResultScreen