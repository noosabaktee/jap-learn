import '../styles/Home.css';
import { Link } from "react-router-dom";

function Page6() {
  return (
    <div id="page6">
        <p>しょうひしゃがやっきょくのスタッフにくすりのしようほうほうをたずねます</p>
        <p>Shouhisha ga yakkyoku no sutaffu ni kusuri no shiyou houhou o tazunemasu.</p>
        <p>(しょうひしゃ)<br></br>( Shouhisha)</p>
        <p>この錠剤はどのように服用しますか?<br></br>(Kono jouzai wa dono you ni fukuyou shimasuka?) </p>
        <div id='next-back-btn'>
          <Link to="/page5">
            <button id='back-btn'>Back</button>
          </Link>
          <Link to="/page7">
            <button id='next-btn'>Next</button>
          </Link>
        </div>
    </div>
  );
}

export default Page6;
