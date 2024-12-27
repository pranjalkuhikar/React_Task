import { useRef } from "react";

const App = () => {
  // const [bg, setBg] = useState("#333");
  const bodyColor = useRef(null);
  const buttonText = useRef(null);
  let flag = 0;
  const handlerClick = () => {
    // console.log(bg);
    // if (bg === "#333") {
    //   setBg("#fff");
    //   buttonText.current.innerText = "Off";
    //   buttonText.current.classList.add("bg-red-600");
    // } else {
    //   setBg("#333");
    //   buttonText.current.innerText = "On";
    //   buttonText.current.classList.remove("bg-red-600");
    // }
    if (flag === 0) {
      bodyColor.current.classList.add("bg-zinc-800");
      buttonText.current.innerText = "Off";
      buttonText.current.classList.add("bg-red-600");
      flag = 1;
    } else {
      bodyColor.current.classList.remove("bg-zinc-800");
      buttonText.current.innerText = "On";
      buttonText.current.classList.remove("bg-red-600");
      flag = 0;
    }
  };

  // useEffect(() => {
  //   document.body.style.backgroundColor = bg;
  // }, [bg]);
  return (
    <div
      ref={bodyColor}
      className=" flex items-center justify-center h-screen w-full "
    >
      <div
        ref={buttonText}
        onClick={handlerClick}
        className="px-5 py-2 bg-blue-600 rounded-lg font-semibold active:scale-95 cursor-pointer text-white"
      >
        On
      </div>
    </div>
  );
};

export default App;
