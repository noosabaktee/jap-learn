import { Link } from "react-router-dom";

function Page12() {
  return (
    <div id="page12">
      <div style={{"paddingTop":"100px"}}>
        <span className="title box" style={{"maxWidth":"12rem"}}>pola kalimat harga obat</span>
        <img src={require("../orang-1.png")} width="180px" style={{"position":"absolute","top":"50px"}} data-aos="fade-right"/>
        <br></br>
        <div className="box">
          <span>pola kalimat menanyakan harga</span><br></br>
          <span>kata benda + は+ いくらですかか</span>
          <span>contoh kalimat かぜぐすりはいくらですか？</span>
          <span>Kaze-gusuri wa ikura desu ka?</span>
        </div>
        <div id='next-back-btn'>
          <Link to="/page11">
            <button id='back-btn'>Back</button>
          </Link>
          <Link to="/page13">
            <button id='next-btn'>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page12;
