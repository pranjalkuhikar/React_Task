import { useEffect, useRef, useState } from "react";

const App = () => {
  const [color, setColor] = useState("bg-slate-100");
  const colorRef = useRef(null);
  const randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };
  const handlerClick = () => {
    setColor(randomColor());
  };
  useEffect(() => {
    colorRef.current.style.backgroundColor = randomColor();
  }, [color]);
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center bg-zinc-800 flex-col gap-5">
        <div ref={colorRef} className="box h-40 w-40 rounded-lg border"></div>
        <div
          onClick={handlerClick}
          className="px-5 py-2 rounded-md font-semibold text-white bg-blue-600 cursor-pointer active:scale-95"
        >
          Change Color
        </div>
      </div>
    </>
  );
};

export default App;
