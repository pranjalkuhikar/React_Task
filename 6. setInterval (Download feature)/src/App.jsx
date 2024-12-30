import { useEffect, useRef, useState } from "react";

const App = () => {
  const widthRef = useRef(null);
  let [width, setWidth] = useState(0);

  const startDownload = () => {
    let intervalId = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(intervalId);
          return prev;
        }
      });
    }, 100);
  };

  const handlerClick = () => {
    startDownload();
  };

  useEffect(() => {
    widthRef.current.style.width = `${width}%`;
  }, [width]);

  return (
    <>
      <div className="h-screen w-full bg-zinc-800 flex items-center justify-center gap-8 flex-col text-white">
        <div className="w-[60em] h-60 rounded-lg bg-white flex items-center justify-center flex-col gap-4 text-black">
          <div className="h-3 w-[80%] rounded-full bg-zinc-500 flex items-start justify-start overflow-hidden">
            <span
              ref={widthRef}
              className="h-full w-[0%] rounded-full transition-all duration-100 bg-yellow-300 z-10"
            ></span>
          </div>
          <h1 className="font-mono font-extrabold text-4xl">{width}%</h1>
        </div>
        <div
          onClick={handlerClick}
          className="px-5 py-2 rounded-lg font-mono font-extrabold text-white cursor-pointer active:scale-95 bg-green-600 text-3xl"
        >
          Download Now
        </div>
      </div>
    </>
  );
};

export default App;
