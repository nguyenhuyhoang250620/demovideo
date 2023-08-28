import imgHeader from "../asset/image/header.png";
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
      <span style={{color:title==='Object Search'?"#00F0FF":"rgba(255, 255, 255, 0.7)"}}>{title}</span>
    </div>
  );
};
const SideBar = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "max-content",
        background: "#212228",
      }}
    >
      <div>
        <img src={imgHeader} />
      </div>
      <Listcontent image={home} title="Home"/>
      <Listcontent image={ekyc} title="eKYC"/>
      <Listcontent image={orc} title="OCR"/>
      <Listcontent image={object} title="Object Search"/>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginLeft:"20px",marginRight:"20px",borderBottom:"1px solid rgba(255, 255, 255, 0.4)"}}> 
        <h5 style={{color:"rgba(255, 255, 255, 0.7)"}}>FACE PROCESSING</h5>
        <img src={arow} style={{height:"7px"}}/>
      </div>
      <Listcontent image={detect} title="Face Detection"/>
      <Listcontent image={compare} title="Face Comparation"/>
      <Listcontent image={face3d} title="Face 3D"/>
      <Listcontent image={enhan} title="Face Enhancing"/>
      <div style={{
        marginTop:"170px",
        textAlign:"center"
      }}>
        <span style={{color:"#00F0FF",fontSize:"20px"}}>GPS</span>
        <span style={{color:"rgba(255, 255, 255, 0.7)",marginRight:"70px",fontSize:"14px"}}>demo</span>
        <span style={{color:"#00F0FF",fontSize:"14px"}}>version 1.0</span>
      </div>
    </div>
  );
};
export default SideBar;
