import avatar from "../asset/image/avatar.jpg"
const ResultTime =({ pointstwo,handleTimeChange,selectedTime})=>{
    return(
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                {pointstwo.map(point => (
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
                      marginLeft:"15px",
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
                ))}
                </div>
    )
}
export default ResultTime