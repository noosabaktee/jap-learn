import { Link } from "react-router-dom";

function Page7() {
  return (
    <div id="page7">
      <div>
        <br></br>
        <span className="title">pola kalimat tanya</span><br></br>
        <span>kata benda +は+ように+kata kerjaか</span><br></br>
        <span>contoh kalimat</span><br></br>
        <span>この錠剤はどのように服用しますか?<br></br>(Kono jouzai wa dono you ni fukuyou 
          shimasuka?)</span>
        <span>この目薬はどのように点眼しますか?<br></br>(Kono megusuri wa dono you ni tengan
          shimasu ka?) - </span>
          <div id='next-back-btn'>
          <Link to="/page6">
            <button id='back-btn'>Back</button>
          </Link>
          <Link to="/page8">
            <button id='next-btn'>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page7;
