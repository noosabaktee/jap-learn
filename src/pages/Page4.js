import { Link } from "react-router-dom";

function Page4() {
  return (
    <div id="page4">
        <div>
          <br></br>
          <div className="box">
            <p>kosakata obat</p>
            <p>ことばくすり</p>
          </div>
          <div className='flex'>
            <div>
              <img src={require("../obat1.png")} width={"100px"}/>
              <span>つぶじょうのくすり<br></br>tsubujou no kusuri</span>
              <span>obat butiran-butiran kecil</span>
            </div>
            <div>
              <img src={require("../obat2.png")} width={"100px"}/>
              <span>うがいぐすり<br></br>ugaiyaku</span>
              <span>obat kumur-kumur</span>
            </div>
          </div>
          <div className='flex'>
            <div>
              <img src={require("../obat3.png")} width={"100px"}/>
              <span>じょうざい<br></br>jouzai</span>
              <span>tablet</span>
            </div>
            <div>
              <img src={require("../obat4.png")} width={"100px"}/>
              <span>なんこう<br></br>nankō</span>
              <span>obat salep</span>
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
    </div>
  );
}

export default Page4;
