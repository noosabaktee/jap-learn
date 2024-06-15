import { Link } from "react-router-dom";

function Page3() {
  return (
    <div id="page3">
        <div>
          <span  className="box" style={{"position":"absolute","bottom":"50px","left":"0"}}>よこそ(selamat daatang)
              何 注文 は薬をかいますか?(nan chuumon wa kusuri wo kaimasuka?)
              ご注文 は薬をいただけますか?(go chuumon wa kusuri wo itadadakemasuka?)
          </span>
          <div id='next-back-btn'>
            <Link to="/page2">
              <button id='back-btn'>Back</button>
            </Link>
            <Link to="/page4">
              <button id='next-btn'>Next</button>
            </Link>
          </div>
        </div>
    </div>
  );
}

export default Page3;
