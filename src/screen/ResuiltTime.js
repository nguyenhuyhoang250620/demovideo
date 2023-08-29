import avatar from "../asset/image/avatar.jpg";
import "./style.css";
import { useRef, useState } from "react";
import prviuos from "../asset/image/previuos.png"
import next from "../asset/image/next.png"
import dataJson from "../data/metadata.json"
import BoundingBoxDiv from "../page/bouding";
const ResultTime = ({
  video,
}) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [dataAll, setDataAll] = useState(Array(203).fill(""));
  const [account,setAccount] = useState()

  const videoRef = useRef(null);
  // const [selectedTime, setSelectedTime] = useState(0);
  const [selectedTime, setSelectedTime] = useState(0);
  const [counts, setCounts] = useState(0);
  const [swich,setSwich] = useState(true)
  const [detect,setDetect]= useState(false)
  const [bouding,setBounding] = useState([])
  const handleTimeChange = (time,second,bouding,key,count) => {
    setDetect(false)
    setAccount(key)
    setCounts(count)
    setSelectedTime(second);
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
          width: "100%",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <div
          style={{
            height: "52vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            ref={videoRef}
            controls
            style={{ height: "432px", width: "768px" }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {bouding.length>0 && <BoundingBoxDiv title={account} top={150} left={620} x={bouding[0]} y={bouding[1]} width={bouding[2]-bouding[0]} height={bouding[3]-bouding[1]} scale={0.4}/>}
        </div>
        <div
        className="container"
          style={{
            display: "flex",
            alignItems: "center",
            background: "#212228",
            height: "34vh",
            flexDirection:"column",
            overflow:"auto"
          }}
        >
          {dataAll.map((user, count) => {
            const key = `ID${count}`;
            
            // console.log(dataJson[key]);
            return(
              <div key={count} style={{display:"flex",flexDirection:"row",marginTop:"10px"}}>
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
                    flexDirection:"column",
                    border:"1px solid #ccc"
                  }}
                >
                  <img
                    src={dataJson[key][0][2][0]}
                    style={{ height: "110px", width: "auto" }}
                  />
                </div>
                <span style={{color:"rgba(255, 255, 255, 0.7)"}}>Person{`ID${count}`}</span>
              </div>
              <div className="grid-container" style={{width:"1600px"}}>
                {dataJson[key].map((point, index) => {
                  return(<div key={index} className="grid-item"
                    onClick={() => {
                      setBounding(point[1])
                      handleTimeChange(formatSecondsToMMSS(point[0][0]), point[0][0],point[1],key,count)
                    }}
                  >
                  <div
                    style={{
                      height:"100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        height: "160px",
                        width: "120px",
                        background: ((point[0][0] === selectedTime)&&(counts===count))? "#00F0FF" : "#464852",
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
                          height: "90px",
                          width: "90px",
                          display: "flex",
                          alignItems: "center",
                          objectFit: "contain",
                          borderRadius: "50%",
                          paddingBottom:"5px",
                          justifyContent: "center",
                          border:"1px solid #ccc"

                        }}
                      >
                        <img
                          style={{ height: "90px", width: "auto" }}
                          src={point[2][0]}
                        />
                      </div>
                      <span
                        style={{
                          marginTop:"20px",
                          color:
                          point[0][0] === selectedTime? "black" : "#FFFFFF",
                        }}
                      >
                        {formatSecondsToMMSS(point[0][0])}
                      </span>
                    </div>
                  </div>
                </div>)
                })}
              </div>
              {/* <div style={{
                display:"flex",
                justifyContent:"space-evenly",
                alignItems:"center",
                width:"150px"
              }}>
                <img onClick={()=>handlePrevious(pointstwo[currentIndex].time,pointstwo[currentIndex].second)} src={prviuos}/>
                <img onClick={()=>handleNext(pointstwo[currentIndex].time,pointstwo[currentIndex].second)} src={next}/>
              </div> */}
            </div>
            )
          })}
        </div>
      </div>
      {/* <div
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

        {dataAll.map((item, index) => (
          <div
            key={item.id}
            style={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              left: 43,
              top: item.top,
            }}
          >
            <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              {item.time}
            </span>
            <div
              style={{
                height: "15px",
                width: "15px",
                marginLeft: "10px",
                borderRadius: "50px",
                background:
                  item.time === selectedTime
                    ? "#00F0FF"
                    : "rgba(255, 255, 255, 0.7)",
              }}
            ></div>
            <div
                onClick={() => handleTimeChange(item.time, item.second)}
                style={{
                  height: "60px",
                  width: "60px",
                  display: "flex",
                  marginLeft: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img src={item[0]} style={{ height: "100px", width: "auto" }} />
              </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};
export default ResultTime;
