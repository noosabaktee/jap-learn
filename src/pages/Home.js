import { Link } from "react-router-dom";
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
    });
  }, [])
  return (
    <div id="home">
        <div style={{"padding-top": "300px"}}>
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
