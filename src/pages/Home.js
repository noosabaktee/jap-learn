import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="home">
        <div style={{"padding-top": "300px"}}>
          <hr className="center-margin"></hr>
          <p>はじましょう</p>
          <p>hajimashou</p>
          <Link to="/page2">
            <button><p>MARI MULAI</p></button>
          </Link>
          <hr className="center-margin"></hr>
        </div>
    </div>
  );
}

export default Home;
