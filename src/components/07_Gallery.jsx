import Nook from "./08_Nook";

export default function Gallery({question, answer, handleAnswer}) {
    
    return (
        <div className="flex flex-col justify-center items-center pt-10 bg-blue-700 w-[90%]">
            <h1>Gallery</h1>
            {question ? question : "Waiting for a message..."}
            {/* Nook */}
            <Nook question={question} answer={answer} handleAnswer={handleAnswer}/>
        </div>
    );
}