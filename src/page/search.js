import "../App.css"
const Search = ({title,bottom})=>{
    return(
        <div 
            style={{
                height:"500px",
                width:"500px",
                background:"#212228",
                overflow:"hidden",
                margin:"10px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"start",
                alignItems:"center",
                position:"relative"
            }}
        >
            <h2 style={{color:"rgba(255, 255, 255, 0.7)"}}>{title}</h2>
            <div style={{height:"50px",width:"450px"}}>
                <span style={{color:"#00F0FF",position:"absolute",fontSize:"13px",top:"60px",left:"40px"}}>License Plate</span>
                <input
                    className="input"
                    placeholder="Enter license plate"
                    style={{
                        height:"50px",
                        width:"450px",
                        background:"#464852",
                        color:"rgba(255, 255, 255, 0.7)",
                        fontSize:"18px",
                    }}
                />
            </div>
        </div>
    )
}
export default Search