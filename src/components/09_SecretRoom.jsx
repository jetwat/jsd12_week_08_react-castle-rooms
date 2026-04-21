export default function SecretRoom({question}) {
    
    return (
        <div className="flex flex-col justify-center items-center pt-10 bg-purple-950 w-[90%]">
            <h1>SecretRoom</h1>
            {question ? question : "Waiting for a message..."}
            {/* Room */}

        </div>
    );
}