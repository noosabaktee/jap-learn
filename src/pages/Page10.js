import { Link } from "react-router-dom";

function Page10() {
  return (
    <div id="page10">
      <div style={{"paddingTop":"100px"}}>
        <span className="title box" style={{"maxWidth":"12rem"}}>pola kalimat efek samping obat</span>
        <img src={require("../orang-1.png")} width="180px" style={{"position":"absolute","top":"50px"}} data-aos="fade-right" alt="orang"/>
        <br></br>
        <div className="box">
          <span>[Subject] + が + [Obat/Perawatan] + を使うと + [Efek Samping] + ことがあります。</span><br></br>
          <span>contoh kalimat </span>
          <span>わたしはくすりをつかうとめまいがすることがあります。<br></br>Watashi wa kusuri o tsukau to memai ga suru koto ga arimasu.</span>
        </div>
        <div id='next-back-btn'>
          <Link to="/page9">
            <button id='back-btn'>Back</button>
          </Link>
          <Link to="/page11">
            <button id='next-btn'>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page10;
