import { useEffect, useState } from "react";
import Castle from "./components/01_Castle";

export default function App() {
  // creating state variables
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [gamePhase, setGamePhase] = useState("idle");
  const [helpReceived, setHelpReceived] = useState(false);
  const [rescuePokemon, setRescuePokemon] = useState([]);

  useEffect(() => {
    if (answer.toLocaleLowerCase().includes("help")){
      setHelpReceived(true);
    }
  }, [answer]);


  const handleQuestion = (event) => {
    console.log(event); // for inspection
    setQuestion(event.target.value);
  }
  const handleAnswer = (event) => {
    console.log(event); // for inspection
    setAnswer(event.target.value);
  }
  const handleCallReinforcements = async () => {
    setGamePhase("fetching");
    const names = ["bulbasaur", "charmander", "squirtle"];
    const results = await Promise.all(
      names.map(async (name) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        return res.json();
      })
    );
    setRescuePokemon(results)
    setGamePhase("reinforcements_ready");
  }

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">

      {/* {(เงื่อนไข) && (html element ที่จะแสดงเมื่อเงือนไขเป็นจริง)} */}
      { (helpReceived && (gamePhase === "idle")) && (
      <div>
        <p>Pokemon outside:</p> 
        <button onClick={handleCallReinforcements}>Call for Reinforcements!</button>
      </div> 
      )}
      
      <p className="text-purple-300">Message for JSD12:&nbsp;
        <span className="text-yellow-300">
          {/* question or waitng for a message */}
          {question ? question : "Waiting for a message..."}
        </span>
      </p>
      <textarea 
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here..."
      />
      <p className="text-green-300">
        Reply from SecretRoom:&nbsp;
        <span className="text-yellow-300">
          {/* answer or waiting for a reply */}
           {answer ? answer : "Waiting for a message..."}
        </span>
      </p>
      <Castle question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
    );
}