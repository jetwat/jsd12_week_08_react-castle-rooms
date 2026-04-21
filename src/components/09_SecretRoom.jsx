export default function SecretRoom({question, answer, handleAnswer}) {

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <h1>SecretRoom</h1>
      <p className="text-purple-300">Message for JSD12:
        <span className="text-yellow-300">
          {/* answer or waitng for a message */}
          {question ? question : "Waiting for a message..."}
        </span>
      </p>
      <textarea 
        value={answer}
        onChange={handleAnswer}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here..."
      />
      <p className="text-green-300">
        Reply to the outside:
        <span className="text-yellow-300">{answer ? answer : "Waiting for a message..."}</span>
      </p>
      
    </div>
    );
}