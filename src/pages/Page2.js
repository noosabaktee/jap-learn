import '../styles/Home.css';
import { Link } from "react-router-dom";

function Page2() {
  return (
    <div id="page2">
        <p>
          あるむらにはゆいいつのやっきょくである JB やっきょくがあります。そのやっきょくはごぜんにじからごごごじまでえいぎょうしています。Aru mura ni wa yuiitsu no yakkyoku de aru JB Yakkyoku ga arimasu. Sono yakkyoku wa gozen niji kara gogo goji made eigyou shiteimasu.
        </p>
        <div id='next-back-btn'>
          <Link to="/">
            <button id='back-btn'>Back</button>
          </Link>
          <Link to="/page3">
            <button id='next-btn'>Next</button>
          </Link>
        </div>
    </div>
  );
}

export default Page2;
