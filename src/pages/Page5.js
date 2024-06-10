import '../styles/Home.css';
import { Link } from "react-router-dom";

function Page5() {
  return (
    <div id="page5">
        <p>kosakata obat</p>
        <p>ことばくすり</p>
        <div>
          <div>
            <p>ジェネリックやくひん<br></br>Jenerikkuyakuhin</p>
            <p>obat generik</p>
          </div>
          <div>
            <p>シロップぐすり<br></br>shiroppugusuri</p>
            <p>sirup</p>
          </div>
          <div>
            <p>いちょうやく<br></br>ichouyaku</p>
            <p>obat maag</p>
          </div>
          <div>
            <p>かぜぐすり<br></br>kazeyaku</p>
            <p>obat masuk angin</p>
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
  );
}

export default Page5;
