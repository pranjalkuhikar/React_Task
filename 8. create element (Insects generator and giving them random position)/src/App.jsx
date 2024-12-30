import { useEffect, useRef, useState } from "react";

const App = () => {
  let Images = [
    "https://plus.unsplash.com/premium_photo-1673968070677-ea718761b6de?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SW5zZXRzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1606800049401-8fd309e27064?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW5zZXRzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1518685632785-9825b0a0e2a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEluc2V0c3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1704562786181-576769f2d77f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SW5zZXRzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1610114859421-09d110322252?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SW5zZXRzfGVufDB8fDB8fHww",
  ];
  const imageRef = useRef(null);
  const [img, setImg] = useState(
    "https://plus.unsplash.com/premium_photo-1673968070677-ea718761b6de?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SW5zZXRzfGVufDB8fDB8fHww"
  );
  function randomImages() {
    return Images[Math.floor(Math.random() * Images.length)];
  }
  const handlerClick = () => {
    setImg(randomImages());
  };
  useEffect(() => {
    imageRef.current.style.top = `${Math.floor(Math.random() * 90)}%`;
    imageRef.current.style.left = `${Math.floor(Math.random() * 90)}%`;
    imageRef.current.style.rotate = `${Math.floor(Math.random() * 360)}deg`;
  }, [img]);
  return (
    <>
      <div className="bg-zinc-800 relative h-screen w-full text-white flex items-center justify-center">
        <img
          ref={imageRef}
          src={img}
          alt=""
          className="object-cover h-20 w-20 rounded-xl absolute top-0 left-0"
        />
        <div
          onClick={handlerClick}
          className="px-5 z-10 py-2 bg-blue-600 font-mono font-semibold rounded-xl active:scale-95 cursor-pointer"
        >
          Create Insets
        </div>
      </div>
    </>
  );
};

export default App;
