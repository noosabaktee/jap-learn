import { Link } from "react-router-dom";

function Page11() {
  return (
    <div id="page11">
      <div style={{"paddingTop":"100px"}}>
        <span className="title box" style={{"maxWidth":"12rem"}}>kosakata harga obat</span>
        <img src={require("../orang-1.png")} width="180px" style={{"position":"absolute","top":"50px"}} data-aos="fade-right" alt="orang"/>
        <br></br>
        <div className="box">
          <span>100 =ひゃく( hyaku)</span>
          <span>1.000 =いっせん (issen)</span>
          <span>10.000=いちまん (ichiman)</span>
          <span>100.000.000= いちおく(ichioku)</span>
        </div>
        <div id='next-back-btn'>
          <Link to="/page10">
            <button id='back-btn'>Back</button>
          </Link>
          <Link to="/page12">
            <button id='next-btn'>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page11;
