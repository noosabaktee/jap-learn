import { useState } from "react";
import { Link } from "react-router-dom";

function Questions() {
  let [current,setCurrent] = useState(0)
  let [isCorrect,setIsCorrect] = useState(null)
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
    }else{
      setIsCorrect(false)
    }
  }
  return (
    <>
        <p>bentuk soal pilihan ganda quizz</p>
        <p>{quests[current]["no"]}. {quests[current]["soal"]}</p>
        <div>
          <button onClick={() => answer(current,"a")}>a. {quests[current]["a"]}</button><br></br>
          <button onClick={() => answer(current,"b")}>b. {quests[current]["b"]}</button><br></br>
          <button onClick={() => answer(current,"c")}>c. {quests[current]["c"]}</button>
        </div>
        {isCorrect && <p>Betul</p>}
        {isCorrect == false && <p>Salah yang betul itu {quests[current]["correct"]}. {quests[current][quests[current]["correct"]]}</p>}
        {isCorrect != null && current < quests.length-1 && <button onClick={() => {if(current < quests.length-1) setCurrent(current+=1);setIsCorrect(null)}}>Next</button>}
        <br></br>
        <Link to="/">Home</Link>
    </>
  );
}

export default Questions;
