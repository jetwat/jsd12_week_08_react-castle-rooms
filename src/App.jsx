// export default function App() {
//   return (
//     <div className="min-h-screen flex justify-center bg-blue-950">
//       <div className="p-6 gap-y-6 flex flex-col justify-start w-[80%] lg:w-[70%]">
//         <h1 className="w-full p-6 bg-amber-100 font-extrabold">
//           React App Starter
//         </h1>
//         <section className="w-full p-5 bg-amber-100 flex">
//           <ul className="list-inside list-disc flex-1">
//             <span className="font-semibold">Tech Stack:</span>
//             <li>Vite</li>
//             <li>React</li>
//             <li>JavaScript</li>
//             <li>Tailwind</li>
//           </ul>
//         </section>
//       </div>
//     </div>
//   );
// }
// ================================================== //


import Castle from "./components/Castle";

export default function App() {
  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <p className="text-purple-300">Message for JSD12:
        <span className="text-yellow-300">
          {/* question or waitng for a message */}
        </span>
      </p>
      <textarea 
        value="banana"
        onChange=""
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here..."
      />
      <p className="text-green-300">
        Reply from Secret Room:
        <span className="text-yellow-300">
          {/* answer or waiting for a reply */}
        </span>
      </p>
      <Castle />
    </div>
    );
}