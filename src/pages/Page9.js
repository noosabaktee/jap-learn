import '../styles/Home.css';
import { Link } from "react-router-dom";

function Page9() {
  return (
    <div id="page9">
        <p>pola kalimat aturan pemakaian obat </p>
        <p>このめぐすりをまいにちにかい、めにさしてください。</p>
        <p>[Obat/Perawatafukun] + [をkata kerja ] + で + [すうりょかいすう/ ひんど+ふくよう してください]</p>
        <p>Kono megusuri o mainichi ni-kai, me ni sashite kudasai.</p>
        <div id='next-back-btn'>
          <Link to="/page8">
            <button id='back-btn'>Back</button>
          </Link>
          <Link to="/page10">
            <button id='next-btn'>Next</button>
          </Link>
        </div>
    </div>
  );
}

export default Page9;
