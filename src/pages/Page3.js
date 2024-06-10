import '../styles/Home.css';
import { Link } from "react-router-dom";

function Page3() {
  return (
    <div id="page3">
        <p>よこそ(selamat daatang)
            何 注文 は薬をかいますか?(nan chuumon wa kusuri wo kaimasuka?)
            ご注文 は薬をいただけますか?(go chuumon wa kusuri wo itadadakemasuka?)
        </p>
        <div id='next-back-btn'>
          <Link to="/page2">
            <button id='back-btn'>Back</button>
          </Link>
          <Link to="/page4">
            <button id='next-btn'>Next</button>
          </Link>
        </div>
    </div>
  );
}

export default Page3;
