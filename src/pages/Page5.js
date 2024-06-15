import { Link } from "react-router-dom";

function Page5() {
  return (
    <div id="page5">
      <div>
        <br></br>
        <div className="box">
          <p>kosakata obat</p>
          <p>ことばくすり</p>
        </div>
        <div className='flex'>
          <div>
            <img src={require("../obat1.png")} width={"100px"}/>
            <span>ジェネリックやくひん<br></br>Jenerikkuyakuhin</span>
            <span>obat generik</span>
          </div>
          <div>
            <img src={require("../obat2.png")} width={"100px"}/>
            <span>シロップぐすり<br></br>shiroppugusuri</span>
            <span>sirup</span>
          </div>
        </div>
        <div className='flex'>
          <div>
            <img src={require("../obat3.png")} width={"100px"}/>
            <span>いちょうやく<br></br>ichouyaku</span>
            <span>obat maag</span>
          </div>
          <div>
            <img src={require("../obat4.png")} width={"100px"}/>
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
