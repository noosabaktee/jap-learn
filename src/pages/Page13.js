import { Link } from "react-router-dom";

function Page13() {
  return (
    <div id="page13">
      <div style={{"paddingTop":"100px"}}>
        <span className="title box" style={{"maxWidth":"12rem"}}>pola kalimat harga obat</span>
        <img src={require("../orang-1.png")} width="180px" style={{"position":"absolute","top":"50px"}} data-aos="fade-right" alt="orang"/>
        <br></br>
        <div className="box">
          <span>pola kalimat menjawab  harga</span><br></br>
          <span>kata benda+は+rupiah/won + desu</span>
          <span>contoh kalimat かぜぐすりは500ルピアです。</span>
          <span>Kaze-gusuri wa go-hyaku rupia desu.</span>
        </div>
        <div id='next-back-btn'>
          <Link to="/page12">
            <button id='back-btn'>Back</button>
          </Link>
          <Link to="/questions">
            <button id='next-btn'>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page13;
