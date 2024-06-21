import { Link } from "react-router-dom";

function Page2() {
  return (
    <div id="page2">
        <div >
          <span className="box" style={{"position":"absolute","bottom":"50%","left":"0","right":"0","margin":"0 auto","width":"80%"}}>
            あるむらにはゆいいつのやっきょくである JB やっきょくがあります。そのやっきょくはごぜんにじからごごごじまでえいぎょうしています。Aru mura ni wa yuiitsu no yakkyoku de aru JB Yakkyoku ga arimasu. Sono yakkyoku wa gozen niji kara gogo goji made eigyou shiteimasu.
            <br></br><hr style={{"margin":"50px auto","border":"1px solid black","maxWidth": "200px"}}></hr>
          </span>
          <div id='next-back-btn'>
            <Link to="/">
              <button id='back-btn'>Back</button>
            </Link>
            <Link to="/page3">
              <button id='next-btn'>Next</button>
            </Link>
          </div>
        </div>
    </div>
  );
}

export default Page2;
