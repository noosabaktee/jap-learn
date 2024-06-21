import { Link } from "react-router-dom";

function Page3() {
  return (
    <div id="page3">
        <div>
          <div  style={{"position":"absolute","bottom":"50px","left":"0"}}>     
            <img src={require("../orang-3.png")} width="200px" style={{"marginBottom":"-5px"}} alt="orang"/>
            <div  className="box">
              <img src={require("../msg.png")} width="30px" style={{"float":"right"}} alt="msg"/>
              <span style={{"clear":"both"}}>
                よこそ(selamat daatang)<br></br>
                何 注文 は薬をかいますか?(nan chuumon wa kusuri wo kaimasuka?)<br></br>
                ご注文 は薬をいただけますか?(go chuumon wa kusuri wo itadadakemasuka?)
              </span>
            </div>
          </div>
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
