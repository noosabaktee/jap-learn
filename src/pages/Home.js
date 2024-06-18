import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="home">
        <div style={{"padding-top": "150px"}}>
          <img src={require("../rs.png")} width="150px" data-aos="fade-up"/>
          <hr className="center-margin"></hr>
          <p data-aos="fade-up">はじましょう</p>
          <p data-aos="fade-up">hajimashou</p>
          <Link to="/page2">
            <button data-aos="fade-right"><p>MARI MULAI</p></button>
          </Link>
          <hr className="center-margin"></hr>
        </div>
    </div>
  );
}

export default Home;
