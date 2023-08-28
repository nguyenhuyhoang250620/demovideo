import imgHeader from "../asset/image/header_home.png";
import home from "../asset/image/home.png";
import ekyc from "../asset/image/ekyc.png"
import orc from "../asset/image/orc.png"
import object from "../asset/image/object.png"
import detect from "../asset/image/detect.png"
import compare from "../asset/image/compare.png"
import face3d from "../asset/image/3d.png"
import enhan from "../asset/image/enhan.png"
import arow from "../asset/image/arow.png"
const Listcontent = ({image,title}) => {
  return (
    <div style={{ display: "flex",alignItems:"center" }}>
      <img src={image} style={{margin:"25px"}}/>
    </div>
  );
};
const SideBarHome = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100px",
        background: "#212228",
        overflow:"hidden",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
      
      }}
    >
      <div style={{  borderBottom:"1px solid rgba(255, 255, 255, 0.4) "}}>
        <img src={imgHeader} />
      </div>
      <Listcontent image={home} title="Home"/>
      <Listcontent image={ekyc} title="eKYC"/>
      <Listcontent image={orc} title="OCR"/>
      <Listcontent image={object} title="Object Search"/>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginLeft:"20px",marginRight:"20px",borderBottom:"1px solid rgba(255, 255, 255, 0.4)"}}> 
        <h5 style={{color:"rgba(255, 255, 255, 0.7)"}}>FACE...</h5>
      </div>
      <Listcontent image={detect} title="Face Detection"/>
      <Listcontent image={compare} title="Face Comparation"/>
      <Listcontent image={face3d} title="Face 3D"/>
      <Listcontent image={enhan} title="Face Enhancing"/>
      <div style={{
        marginTop:"170px",
      }}>
        <span style={{color:"#00F0FF",fontSize:"20px"}}>GPS</span>
        <span style={{color:"rgba(255, 255, 255, 0.7)",fontSize:"14px"}}>demo</span>
      </div>
    </div>
  );
};
export default SideBarHome;
