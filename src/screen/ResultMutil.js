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
const ResultMutil =()=>{
  const location = useLocation();
  const videoRef = useRef(null);
  // const [selectedTime, setSelectedTime] = useState(0);
  const [selectedTime, setSelectedTime] = useState();
  const [swich,setSwich] = useState(true)
  const [detect,setDetect]= useState(false)
  const [bouding,setBounding] = useState([])
  const [keyword,setKeys] = useState()
  const [isCheck,setisCheck]= useState(localStorage.getItem("img"))
  
  const dataJson = location.state.dataAll;
  const keys = Object.keys(location.state.dataAll);
  const firstKey = keys[0];
 
  const handleTimeChange = (time,second,bouding) => {
    setDetect(false)
    console.log(second)
    setSelectedTime(second);
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
          <ResultTime
                data={dataJson}
                video={location.state.data}
              />
        </div>
        </div>
    )
}   
export default ResultMutil