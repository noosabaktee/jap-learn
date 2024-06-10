import '../styles/Home.css';
import { Link } from "react-router-dom";

function Page12() {
  return (
    <div id="page12">
        <p>pola kalimat harga obat</p>
        <p>pola kalimat menanyakan harga</p>
        <p>kata benda + は+ いくらですかか</p>
        <p>contoh kalimat かぜぐすりはいくらですか？</p>
        <p>Kaze-gusuri wa ikura desu ka?</p>
        <div id='next-back-btn'>
          <Link to="/page11">
            <button id='back-btn'>Back</button>
          </Link>
          <Link to="/questions">
            <button id='next-btn'>Next</button>
          </Link>
        </div>
    </div>
  );
}

export default Page12;
