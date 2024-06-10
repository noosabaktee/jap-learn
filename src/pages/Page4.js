import '../styles/Home.css';
import { Link } from "react-router-dom";

function Page3() {
  return (
    <div id="page3">
        <p>kosakata obat</p>
        <p>ことばくすり</p>
        <div>
          <div>
            <p>つぶじょうのくすり<br></br>tsubujou no kusuri</p>
            <p>obat butiran-butiran kecil</p>
          </div>
          <div>
            <p>うがいぐすり<br></br>ugaiyaku</p>
            <p>obat kumur-kumur</p>
          </div>
          <div>
            <p>じょうざい<br></br>jouzai</p>
            <p>tablet</p>
          </div>
          <div>
            <p>なんこう<br></br>nankō</p>
            <p>obat salep</p>
          </div>
        </div>
        <div id='next-back-btn'>
          <Link to="/page3">
            <button id='back-btn'>Back</button>
          </Link>
          <Link to="/page5">
            <button id='next-btn'>Next</button>
          </Link>
        </div>
    </div>
  );
}

export default Page3;
