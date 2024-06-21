import { Link } from "react-router-dom";

function Page5() {
  return (
    <div id="page5">
      <div>
        <br></br>
        <div className="box" style={{"maxWidth":"14rem"}} data-aos="fade-up">
          <p>kosakata obat</p>
          <p>ことばくすり</p>
        </div>
        <img src={require("../orang-1.png")} width="180px" style={{"position":"absolute","top":"10px","right":"0"}} data-aos="fade-right" alt="orang"/>
        <div className='flex'>
          <div>
            <img src={require("../obat1.png")} width={"100px"} data-aos="fade-right" alt="obat"/>
            <span>ジェネリックやくひん<br></br>Jenerikkuyakuhin</span>
            <span>obat generik</span>
          </div>
          <div>
            <img src={require("../obat2.png")} width={"100px"} data-aos="fade-down" alt="obat"/>
            <span>シロップぐすり<br></br>shiroppugusuri</span>
            <span>sirup</span>
          </div>
        </div>
        <div className='flex'>
          <div>
            <img src={require("../obat3.png")} width={"100px"} data-aos="fade-up" alt="obat"/>
            <span>いちょうやく<br></br>ichouyaku</span>
            <span>obat maag</span>
          </div>
          <div>
            <img src={require("../obat4.png")} width={"100px"} data-aos="fade-left" alt="obat"/>
            <span>かぜぐすり<br></br>kazeyaku</span>
            <span>obat masuk angin</span>
          </div>
        </div>
        <div id='next-back-btn'>
          <Link to="/page4">
            <button id='back-btn'>Back</button>
          </Link>
          <Link to="/page6">
            <button id='next-btn'>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page5;
