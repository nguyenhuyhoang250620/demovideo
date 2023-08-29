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
  const handleTimeChange = (time,second,bouding) => {
    setDetect(false)
    console.log(second)
    setSelectedTime(second[0]);
    console.log(bouding)
    setBounding(bouding)
    
    videoRef.current.currentTime = second;
  }
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
          {bouding.length>0 && <BoundingBoxDiv  title="ID0" top={100} left={220} x={bouding[0]} y={bouding[1]} width={bouding[2]-bouding[0]} height={bouding[3]-bouding[1]} scale={0.6}/>}
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
        >
          <div style={{display:"flex",flexDirection:"row",marginTop:"10px"}}>
              <div 
                style={{
                    height:"100%",
                    width:"150px",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:'center',
                    alignItems:'center',
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
                    src={dataJson.ID0[0][2]}
                    style={{ height: "120px", width: "auto" }}
                  />
                </div>
                <span style={{color:"rgba(255, 255, 255, 0.7)"}}>Person11</span>
              </div>
              <div className="grid-container" style={{width:"1000px"}}>
                {dataJson.ID0.map((point, index) => (
                  <div key={index} className="grid-item">
                    <div
                      key={point.id}
                      style={{
                        height:"100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                      onClick={() => handleTimeChange(formatSecondsToMMSS(point[0]),point[0],point[1])}
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
                            src={point[2]}
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
        </div>
      </div>
      <div
        style={{
          height: "100%",
          width: "20%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingLeft: "100px",
          paddingTop: "20px",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "5px",
            background: "#464852",
          }}
        ></div>

        {dataJson.ID0.map((item, index) => (
          <div
            key={item.id}
            style={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              left: 43,
              top: item[0]*120,
            }}
          >
            <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              {formatSecondsToMMSS(item[0])}
            </span>
            <div
              style={{
                height: "15px",
                width: "15px",
                marginLeft: "10px",
                borderRadius: "50px",
                background:
                item[0][0]=== selectedTime
                    ? "#00F0FF"
                    : "rgba(255, 255, 255, 0.7)",
              }}
            ></div>
              <div
                onClick={() => handleTimeChange(formatSecondsToMMSS(item[0]),item[0],item[1])}
                style={{
                  height: "60px",
                  width: "60px",
                  display: "flex",
                  marginLeft: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border:"1px solid white"
                }}
              >
                <img src={item[2]} style={{ height: "50px", width: "auto" }} />
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ResultSingle;