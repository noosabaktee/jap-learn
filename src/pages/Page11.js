import '../styles/Home.css';
import { Link } from "react-router-dom";

function Page11() {
  return (
    <div id="page11">
        <p>kosakata harga obat</p>
        <p>100 =ひゃく( hyaku)</p>
        <p>1.000 =いっせん (issen)</p>
        <p>10.000=いちまん (ichiman)</p>
        <p>100.000.000= いちおく(ichioku)</p>
        <div id='next-back-btn'>
          <Link to="/page10">
            <button id='back-btn'>Back</button>
          </Link>
          <Link to="/page12">
            <button id='next-btn'>Next</button>
          </Link>
        </div>
    </div>
  );
}

export default Page11;
