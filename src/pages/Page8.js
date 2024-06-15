import { Link } from "react-router-dom";

function Page8() {
  return (
    <div id="page8">
      <div>
        <div id='next-back-btn'>
          <Link to="/page7">
            <button id='back-btn'>Back</button>
          </Link>
          <Link to="/page9">
            <button id='next-btn'>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page8;
