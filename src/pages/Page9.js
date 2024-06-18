import { Link } from "react-router-dom";

function Page9() {
  return (
    <div id="page9">
      <div style={{"paddingTop":"100px"}}>
        <span className="title box" style={{"maxWidth":"12rem"}}>pola kalimat aturan pemakaian obat </span>
        <img src={require("../orang-1.png")} width="180px" style={{"position":"absolute","top":"50px"}} data-aos="fade-right"/>
        <br></br>
        <div className="box">
          <span>このめぐすりをまいにちにかい、めにさしてください。</span><br></br>
          <span>[Obat/Perawatafukun] + [をkata kerja ] + で + [すうりょかいすう/ ひんど+ふくよう してください]</span><br></br>
          <span>Kono megusuri o mainichi ni-kai, me ni sashite kudasai.</span>
        </div>
        <div id='next-back-btn'>
          <Link to="/page8">
            <button id='back-btn'>Back</button>
          </Link>
          <Link to="/page10">
            <button id='next-btn'>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page9;
