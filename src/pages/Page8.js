import '../styles/Home.css';
import { Link } from "react-router-dom";

function Page8() {
  return (
    <div id="page8">
        <p>じょうざいはにかいちにちにちをのんでください<br></br>Jōzai wa ni kai ichi-nichi ni nonde kudasai</p>
        <p>このじょうざいはどのようにふくようしますか？<br></br>Kono jōzai wa dono yō ni fukuyō shimasu ka?</p>
        <div id='next-back-btn'>
          <Link to="/page7">
            <button id='back-btn'>Back</button>
          </Link>
          <Link to="/page9">
            <button id='next-btn'>Next</button>
          </Link>
        </div>
    </div>
  );
}

export default Page8;
