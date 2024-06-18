import { Link } from "react-router-dom";

function Page8() {
  return (
    <div id="page8">
      <div>
        <div>
          <div>
            <div className="bg-awan">
              <span>じょうざいはにかいちにちにちをのんでください</span>
              <span>Jōzai wa ni kai ichi-nichi ni nonde kudasai</span>
            </div>
            <img src={require("../orang-1.png")} width="180px" style={{"position":"absolute","top":"100px"}} data-aos="fade-right"/>
          </div>
          <div>
            <div className="bg-awan">
              <span>このじょうざいはどのようにふくようしますか？</span>
              <span>Kono jōzai wa dono yō ni fukuyō shimasu ka?</span>
            </div>
            <img src={require("../orang-2.png")} width="150px" style={{"float":"right","marginTop":"-70px"}} data-aos="fade-right"/>
          </div>
        </div>
        <div id='next-back-btn'>
          <Link to="/page7">
            <button id='back-btn'>Back</button>
          </Link>
          <Link to="/page9">
            <button id='next-btn'>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page8;
