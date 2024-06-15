import { Link } from "react-router-dom";

function Page10() {
  return (
    <div id="page10">
      <div style={{"paddingTop":"100px"}}>
        <div className="box">
          <span className="title">pola kalimat efek samping obat</span><br></br>
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
