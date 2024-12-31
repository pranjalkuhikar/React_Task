import { useRef, useEffect } from "react";

const App = () => {
  const boxRef = useRef(null);
  let Position = 0;
  const handlerKeyDown = (event) => {
    console.log(event.key);
    if (event.key === "ArrowUp") {
      boxRef.current.style.top = `${Position--}%`;
    } else if (event.key === "ArrowDown") {
      boxRef.current.style.top = `${Position++}%`;
    } else if (event.key === "ArrowRight") {
      boxRef.current.style.left = `${Position++}%`;
    } else if (event.key === "ArrowLeft") {
      boxRef.current.style.left = `${Position--}%`;
    }
  };

  useEffect(() => {
    const element = boxRef.current;
    if (element) {
      element.focus();
    }
  }, []);

  return (
    <div className="relative h-screen w-full bg-zinc-800">
      <div className="absolute inset-0">
        <div
          tabIndex={"0"}
          ref={boxRef}
          onKeyDown={handlerKeyDown}
          className="w-40 h-40 rounded-xl absolute top-0 left-0 bg-blue-600 outline-none"
        ></div>
      </div>
    </div>
  );
};

export default App;
