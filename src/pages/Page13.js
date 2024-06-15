import { Link } from "react-router-dom";

function Page13() {
  return (
    <div id="page13">
      <div>
        <br></br>
        <span className="title">pola kalimat harga obat</span><br></br>
        <span>pola kalimat menjawab  harga</span><br></br>
        <span>kata benda+は+rupiah/won + desu</span>
        <span>contoh kalimat かぜぐすりは500ルピアです。</span>
        <span>Kaze-gusuri wa go-hyaku rupia desu.</span>
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
