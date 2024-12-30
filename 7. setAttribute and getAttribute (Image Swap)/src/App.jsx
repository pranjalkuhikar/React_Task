import { useRef } from "react";

const App = () => {
  const Img1 = useRef(null);
  const Img2 = useRef(null);
  const handlerClick = () => {
    let image1 = Img1.current.src;
    let image2 = Img2.current.src;
    Img1.current.src = image2;
    Img2.current.src = image1;
  };
  return (
    <>
      <div className="bg-zinc-800 h-screen w-full flex items-center justify-center gap-10">
        <img
          ref={Img1}
          src="https://plus.unsplash.com/premium_photo-1732783307875-7fea5e3eee27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
          alt=""
          className="rounded-xl h-96 object-cover"
        />
        <div
          onClick={handlerClick}
          className="text-white px-5 py-2 bg-blue-600 active:scale-95 cursor-pointer rounded-xl font-mono font-semibold text-xl"
        >
          Swap
        </div>
        <img
          ref={Img2}
          src="https://images.unsplash.com/photo-1733235014927-32494ec8233b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="rounded-xl h-96 object-cover"
        />
      </div>
    </>
  );
};

export default App;
