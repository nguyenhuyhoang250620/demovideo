import avatar from "../asset/image/avatar.jpg";
import "./style.css";
import { useRef, useState } from "react";
import prviuos from "../asset/image/previuos.png"
import next from "../asset/image/next.png"
import BoundingBoxDiv from "../page/bouding";
const ResultSingle = ({
  data,
  video,
}) => {
  const videoRef = useRef(null);
  // const [selectedTime, setSelectedTime] = useState(0);
  const [selectedTime, setSelectedTime] = useState();
  const [swich,setSwich] = useState(true)
  const [detect,setDetect]= useState(false)
  const [bouding,setBounding] = useState([])
  const dataz = []
  const handleTimeChange = (time,second,bouding) => {
    setDetect(false)
    console.log(second)
    setSelectedTime(second);
    console.log(bouding)
    setBounding(bouding)
    
    videoRef.current.currentTime = second;
  }
  console.log("data",data)
  const keys = Object.keys(data);
  const fieldsExceptLast = keys.slice(0, -1);
  fieldsExceptLast.forEach(key => {
    dataz.push(key)
  });
  // const firstKey = keys[0];
  const dataJson = data
  function formatSecondsToMMSS(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    return `${formattedMinutes}:${formattedSeconds}`;
}
  return (
    <div
      style={{
        height: "80vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "80%",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <div
          style={{
            height: "65vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            ref={videoRef}
            controls
            style={{ height: "600px", width: "auto" }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {bouding.length>0 && <BoundingBoxDiv  title="ID0" top={100} left={420} x={bouding[0]} y={bouding[1]} width={bouding[2]-bouding[0]} height={bouding[3]-bouding[1]} scale={0.6}/>}
        </div>
        <div
        className="container"
          style={{
            display: "flex",
            alignItems: "center",
            background: "#212228",
            height: "20vh",
            flexDirection:"column",
            overflow:"auto"
          }}
        >{
          dataz.map((items)=>{
            return(
              <div style={{display:"flex",flexDirection:"row",marginTop:"10px"}}>
              <div 
                style={{
                    height:"100%",
                    width:"150px",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:'center',
                    alignItems:'center',
                    overflow:"auto"
                }}
                >
                <div
                  style={{
                    height: "120px",
                    width: "120px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    margin: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection:"column"
                  }}
                >
                  <img
                    src={`http://123.24.199.156:18080/${dataJson[items][0][2][0].replace(/^\.\//,'')}`}
                    style={{ height: "120px", width: "auto" }}
                  />
                </div>
                <span style={{color:"rgba(255, 255, 255, 0.7)"}}>{items}</span>
              </div>
              <div className="grid-container" style={{width:"1000px"}}>
                {dataJson[items].map((point, index) => (
                  <div key={index} className="grid-item">
                    <div
                      style={{
                        height:"100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                      onClick={() => handleTimeChange(formatSecondsToMMSS(point[0][0]),point[0][0],point[1])}
                    >
                      <div
                        style={{
                          height: "160px",
                          width: "120px",
                          background:point[0][0]=== selectedTime? "#00F0FF" : "#464852",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "start",
                          alignItems: "center",
                          borderRadius: "6px",
                          cursor: "pointer",
                        }}
                      >
                        <div
                          style={{
                            marginTop:"5px",
                            overflow: "hidden",
                            height: "100px",
                            width: "100px",
                            display: "flex",
                            alignItems: "center",
                            objectFit: "contain",
                            borderRadius: "50%",
                            paddingBottom:"5px",
                            justifyContent: "center",
                            border:"1px solid black"
                          }}
                        >
                          <img
                            style={{ height: "110px", width: "auto" }}
                            src={`http://123.24.199.156:18080/${point[2][0].replace(/^\.\//,'')}`}
                          />
                        </div>
                        <span
                          style={{
                            marginTop:"10px",
                            color:
                            point[0][0]=== selectedTime  ? "black" : "#FFFFFF",
                          }}
                        >
                          {formatSecondsToMMSS(point[0])}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{
                display:"flex",
                justifyContent:"space-evenly",
                alignItems:"center",
                width:"150px"
              }}>
              </div>
            </div>
            )
          })
        }
        </div>
      </div>
    </div>
  );
};
export default ResultSingle;