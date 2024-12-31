import { useRef } from "react";

const App = () => {
  const bgRef = useRef(null);
  const mouseRef = useRef(null);
  const handlerMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouseRef.current.style.left = `${clientX}px`;
    mouseRef.current.style.top = `${clientY}px`;
  };
  return (
    <>
      <div
        ref={mouseRef}
        className="h-20 w-20 rounded-full border border-zinc-300 absolute top-0 left-0 transition-all duration-100 translate-x-[-50%] translate-y-[-50%] z-10"
      ></div>
      <div
        onMouseMove={handlerMouseMove}
        ref={bgRef}
        className="bg-zinc-800 relative h-screen w-full flex items-center justify-center text-white"
      >
        App
      </div>
    </>
  );
};

export default App;
