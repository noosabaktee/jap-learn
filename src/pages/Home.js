import '../styles/Home.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="home">
        <hr></hr>
        <p>はじましょう</p>
        <p>hajimashou</p>
        <Link to="/page2">
          <button>MARI MULAI</button>
        </Link>
    </div>
  );
}

export default Home;
