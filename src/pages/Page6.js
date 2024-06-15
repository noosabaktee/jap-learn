import { Link } from "react-router-dom";

function Page6() {
  return (
    <div id="page6">
      <div>
        <span>しょうひしゃがやっきょくのスタッフにくすりのしようほうほうをたずねます</span><br></br>
        <span>Shouhisha ga yakkyoku no sutaffu ni kusuri no shiyou houhou o tazunemasu.</span>
        <div className="box" style={{"position":"absolute","bottom":"50px","left":"0", "right":"0"}}>
          <span>(しょうひしゃ)<br></br>( Shouhisha)</span>
          <span>この錠剤はどのように服用しますか?<br></br>(Kono jouzai wa dono you ni fukuyou shimasuka?) </span>
        </div>
        <div id='next-back-btn'>
          <Link to="/page5">
            <button id='back-btn'>Back</button>
          </Link>
          <Link to="/page7">
            <button id='next-btn'>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page6;
