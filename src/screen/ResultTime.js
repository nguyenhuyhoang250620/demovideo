import avatar from "../asset/image/avatar.jpg";
import "./style.css";
import { useRef, useState } from "react";
import prviuos from "../asset/image/previuos.png"
import next from "../asset/image/next.png"
const ResultTime = ({
  pointstwo,
  handleTimeChange,
  selectedTime,
  videoRef,
  video,
}) => {
  const data = [
    { id: "1", time: "01:40", top: 12, image: [avatar], second: 100 },
    {
      id: "3",
      time: "03:20",
      top: 200,
      image: [avatar, avatar, avatar],
      second: 200,
    },
    { id: "4", time: "04:10", top: 350, image: [avatar], second: 250 },
    { id: "5", time: "05:00", top: 500, image: [avatar, avatar], second: 300 },
    { id: "6", time: "06:40", top: 700, image: [avatar], second: 280 },
  ];
  const dataUser = [1, 2, 3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = (time,second) => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      handleTimeChange(time, second)
    }
  };

  const handleNext = (time,second) => {
    if (currentIndex < pointstwo.length - 1) {
      setCurrentIndex(currentIndex + 1);
      handleTimeChange(time,second)
    }
  };

  console.log("pointstwo",pointstwo[currentIndex].time)
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
            style={{ height: "48vh", width: "auto" }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
          {dataUser.map((user, count) => (
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
                    src={avatar}
                    style={{ height: "200px", width: "auto" }}
                  />
                </div>
                <span style={{color:"rgba(255, 255, 255, 0.7)"}}>Person11</span>
              </div>
              <div className="grid-container">
                {pointstwo.map((point, index) => (
                  <div key={index} className="grid-item">
                    <div
                      key={point.id}
                      style={{
                        height:"100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                      onClick={() => handleTimeChange(point.time, point.second)}
                    >
                      <div
                        style={{
                          height: "160px",
                          width: "120px",
                          background: point.time === pointstwo[currentIndex].time ? "#00F0FF" : "#464852",
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
                          }}
                        >
                          <img
                            style={{ height: "200px", width: "auto" }}
                            src={avatar}
                          />
                        </div>
                        <span
                          style={{
                            marginTop:"10px",
                            color:
                            point.time === pointstwo[currentIndex].time  ? "black" : "#FFFFFF",
                          }}
                        >
                          {point.time}
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
                <img onClick={()=>handlePrevious(pointstwo[currentIndex].time,pointstwo[currentIndex].second)} src={prviuos}/>
                <img onClick={()=>handleNext(pointstwo[currentIndex].time,pointstwo[currentIndex].second)} src={next}/>
              </div>
            </div>
          ))}
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

        {data.map((item, index) => (
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
            {item.image.map((e, p) => (
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
                <img src={e} style={{ height: "100px", width: "auto" }} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ResultTime;
