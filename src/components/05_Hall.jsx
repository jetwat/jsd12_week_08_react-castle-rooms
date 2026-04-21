import Coridor from "./06_Coridor";

export default function Hall({question}) {
    
    return (
        <div className="flex flex-col justify-center items-center pt-10 bg-green-400 w-[90%]">
            <h1>Hall</h1>
            {question ? question : "Waiting for a message..."}
            {/* Coridor */}
            <Coridor />
        </div>
    );
}