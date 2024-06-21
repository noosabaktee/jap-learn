import { Link } from "react-router-dom";

function Home() {
  const playSound = () => {
    var audio = new Audio(require('../start.mp3'));
    audio.play();
  }
  return (
    <div id="home">
        <div style={{"paddingTop": "150px"}}>
          <img src={require("../rs.png")} width="150px" data-aos="fade-up" alt="rumah-sakit"/>
          <hr className="center-margin"></hr>
          <p data-aos="fade-up">はじましょう</p>
          <p data-aos="fade-up">hajimashou</p>
          <Link to="/page2">
            <button data-aos="fade-right" onClick={() => playSound()}><p>MARI MULAI</p></button>
          </Link>
          <hr className="center-margin"></hr>
        </div>
    </div>
  );
}

export default Home;
