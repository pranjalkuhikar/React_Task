import { useEffect, useRef, useState } from "react";

const App = () => {
  const [text, setText] = useState();
  const textRef = useRef(null);
  const randomTeam = () => {
    let teams = ["CSK", "DC", "KKR", "MI", "RR", "RCB", "SRH"];
    return teams[Math.floor(Math.random() * teams.length)];
  };
  const handlerClick = () => {
    setText(randomTeam());
  };
  useEffect(() => {
    textRef.current.textContent = randomTeam();
  }, [text]);
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center bg-zinc-800 flex-col gap-5">
        <div
          ref={textRef}
          className="box h-40 w-40 rounded-lg border text-white flex items-center justify-center font-semibold text-3xl"
        ></div>
        <div
          onClick={handlerClick}
          className="px-5 py-2 rounded-md font-semibold text-white bg-blue-600 cursor-pointer active:scale-95"
        >
          Random IPL Teams
        </div>
      </div>
    </>
  );
};

export default App;
