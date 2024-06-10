import '../styles/Home.css';
import { Link } from "react-router-dom";

function Page10() {
  return (
    <div id="page10">
        <p>pola kalimat efek samping obat</p>
        <p>[Subject] + が + [Obat/Perawatan] + を使うと + [Efek Samping] + ことがあります。</p>
        <p>contoh kalimat </p> 
        <p>わたしはくすりをつかうとめまいがすることがあります。<br></br>Watashi wa kusuri o tsukau to memai ga suru koto ga arimasu.</p>
        <div id='next-back-btn'>
          <Link to="/page9">
            <button id='back-btn'>Back</button>
          </Link>
          <Link to="/page11">
            <button id='next-btn'>Next</button>
          </Link>
        </div>
    </div>
  );
}

export default Page10;
