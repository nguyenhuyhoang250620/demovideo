import avatar from "../asset/image/avatar.jpg"
import "./style.css"

const ResultTime =({ pointstwo,handleTimeChange,selectedTime,videoRef,video})=>{
    return(
        <div style={{
          height:"100%",
          width:"100%",
          display:"flex"
        }}>
            <div style={{
              height:"90vh",
              width:"70%",
             paddingLeft:"20px",
             paddingRight:"20px"
            }}>
              <div style={{
                height:"56vh",
                width:"100%",
                display:"flex",justifyContent:"center",
                alignItems:"center",
              }}>
                <video ref={videoRef} controls style={{height:"48vh",width:"auto"}}>
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
              </div>
              <div style={{
                display:"flex",
                alignItems:"center",
                background:"#212228",
                padding:"10px"
              }}>
                <div style={{
                  height:"120px",
                  width:"120px",
                  borderRadius:"50%",
                  overflow:"hidden",
                  margin:"10px",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center"
                }}>
                  <img src={avatar} style={{height:"200px",width:"auto"}}/>
                </div>
                <div className="grid-container">
                  {pointstwo.map((point, index) => (
                    <div key={index} className="grid-item">
                         <div
                            key={point.id}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                            onClick={() => handleTimeChange(point.time,point.second)}
                          >
                            <div style={{
                              height:"120px",
                              width:"120px",
                              background:point.time === selectedTime ?"#00F0FF":"#464852",
                              display:"flex",
                              flexDirection:"column",
                              justifyContent:"center",
                              alignItems:"center",
                              borderRadius:"6px",
                              cursor:"pointer"
                            }}>
                            <div style={{
                              overflow:"hidden",
                              height:"80px",
                              width:"80px",
                              display:"flex",
                              alignItems:"center",
                              objectFit:"contain",
                              borderRadius:"50%",
                              justifyContent:"center",
                              }}>
                              <img
                                style={{height:"200px",width:"auto"}}
                                src={avatar}
                              />
                            </div>
                            <span style={{ color: point.time === selectedTime?"black":"#FFFFFF" }}>{point.time}</span>
                            </div>
                          </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>      
            <div style={{
              height:"100%",
              width:"30%",
              display:"flex",
              justifyContent:"flex-start",
              alignItems:"center",
              paddingLeft:'100px',
              position:"relative"
            }}>
              <div
                style={{
                  height:"80vh",
                  width:"5px",
                  background:"#464852"
                }} 
              >
              </div>
              <div 
                style={{
                  position:"absolute",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"space-around"
                }}
              >
                  <span>04:00</span>
                  <div style={{
                    height:"10px",
                    width:"10px",
                    borderRadius:"50px",
                    background:'red'
                  }}></div>
                  <img
                    src={avatar}
                    style={{height:"30px",width:"30px"}}
                  />
              </div>
            </div>   
        </div>
    )
}
export default ResultTime
