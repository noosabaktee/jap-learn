import { useState } from "react";
import { Link } from "react-router-dom";
import correct from '../correct.jpg'
import wrong from '../wrong.jpg'

function Questions() {
  let [current,setCurrent] = useState(0)
  let [isCorrect,setIsCorrect] = useState(null)
  let [bgImg, setBgImg] = useState(correct)
  let quests = [
    {no: 1, soal:"この....を噛/かむんでもいいですか？", a:"じょうざい", b:"かいて", c:"ノート", correct:"a"},
    {no: 2, soal:"....bahasa jepang obat generik apa?", a:"ジェネリックやくひん", b:"おかね", c:"くつ", correct:"a"},
    {no: 3, soal:"obat mata bahasa jepang apa?", a:"めぐすり", b:"500ルピア", c:"おはよう", correct:"a"},
    {no: 4, soal:"bahasa jepang obat apa?", a:"くすり", b:"いくら", c:"なんじ", correct:"a"},
    {no: 5, soal:"obat maag bahasa jepang apa?", a:"ください", b:"めぐすり", c:"いちょうやく", correct:"a"},
  ]

  let answer = (no_soal,answer) => {
    if(quests[no_soal]["correct"] == answer){
      setIsCorrect(true)
      setBgImg(correct)
    }else{
      setIsCorrect(false)
      setBgImg(wrong)
    }
  }
  return (
    <>
      <div id="questions">
        <br></br>
        <span className="title">bentuk soal pilihan ganda quizz</span><br></br><br></br>
        <span className="title">{quests[current]["no"]}. {quests[current]["soal"]}</span>
        <div className="flex" style={{"alignItems":"center","justifyContent":"center"}}>
          <button className="box title" style={{"margin":"20px 10px"}} onClick={() => answer(current,"a")}>a. {quests[current]["a"]}</button><br></br>
          <button className="box title" style={{"margin":"20px 10px"}} onClick={() => answer(current,"b")}>b. {quests[current]["b"]}</button><br></br>
        </div>
        <div>
          <button className="box title" style={{"margin":"10px auto"}} onClick={() => answer(current,"c")}>c. {quests[current]["c"]}</button>
        </div>
        {current <= 0 && <Link to="/page13"><button id='back-btn' style={{"position":"absolute","bottom":"5px","left":"0"}}>Back</button></Link>}
        {isCorrect != null && current < quests.length && 
          <div id="feedback" style={{"backgroundImage": `url(${bgImg})`, "backgroundSize": "cover","height":"100vh","maxWidth":"420px","width":"100%","backgroundPosition": "center center"}}>
            <div style={{"position":"absolute","bottom":"5px", "left":"0","right":"0"}}>
              {isCorrect == false && <span className="title">Jawaban yang benar <br></br> {quests[current]["correct"]}. {quests[current][quests[current]["correct"]]}</span>}
              {current < quests.length-1 && <button onClick={() => {setCurrent(current+=1);setIsCorrect(null)}} id="next-btn">Next</button>}
              {current >= quests.length-1 && <Link to="/"><button id="next-btn">Home</button></Link>}
            </div>
          </div>
        }
      </div>
    </>
  );
}

export default Questions;
