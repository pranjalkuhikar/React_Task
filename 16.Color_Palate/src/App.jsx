import { useRef } from "react";

const App = () => {
  const colorRef = useRef(null);
  const bgRef = useRef(null);

  const handlerChange = (value) => {
    colorRef.current.click();
    bgRef.current.style.backgroundColor = value;
  };

  return (
    <div className="h-screen w-full bg-zinc-800 flex items-center justify-center">
      <div
        ref={bgRef}
        onClick={handlerChange}
        className="h-40 w-96 bg-zinc-200 border border-zinc-200 rounded-md"
      >
        <input
          ref={colorRef}
          type="color"
          hidden
          onChange={(e) => handlerChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default App;
