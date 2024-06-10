import '../styles/Home.css';
import { Link } from "react-router-dom";

function Page7() {
  return (
    <div id="page7">
        <p>pola kalimat tanya</p>
        <p>kata benda +は+ように+kata kerjaか</p>
        <p>contoh kalimat</p>
        <p>この錠剤はどのように服用しますか?<br></br>(Kono jouzai wa dono you ni fukuyou 
          shimasuka?)</p>
        <p>この目薬はどのように点眼しますか?<br></br>(Kono megusuri wa dono you ni tengan
          shimasu ka?) - </p>
          <div id='next-back-btn'>
          <Link to="/page6">
            <button id='back-btn'>Back</button>
          </Link>
          <Link to="/page8">
            <button id='next-btn'>Next</button>
          </Link>
        </div>
    </div>
  );
}

export default Page7;
