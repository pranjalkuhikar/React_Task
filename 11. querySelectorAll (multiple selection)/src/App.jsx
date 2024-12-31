import { useRef } from "react";

const App = () => {
  const imageSources = [
    "https://images.unsplash.com/photo-1725714834773-b5f278346915?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1730660666237-1e6a008067a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1721332149274-586f2604884d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1734578998302-863e3fc81c87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1734555772478-189ea4f71aa6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1733969020103-4e2821445dd0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const bgRef = useRef(null);
  const imgRef = useRef(null);
  const handlerClick = (index) => {
    imgRef.current.src = imageSources[index];
    bgRef.current.style.display = "flex";
  };
  const handlerCancel = () => {
    bgRef.current.style.display = "none";
  };

  return (
    <>
      <div className="relative bg-zinc-800 h-screen w-full p-20 flex items-center justify-center">
        <div className="flex items-center justify-center flex-wrap gap-10">
          {imageSources.map((item, idx) => (
            <img
              key={idx}
              src={item}
              alt=""
              onClick={() => handlerClick(idx)}
              className="object-cover h-60 w-[25em] rounded-xl"
            />
          ))}
        </div>
      </div>
      <div
        ref={bgRef}
        className="absolute top-0 left-0 bg-zinc-800 h-screen w-full p-20 items-center justify-center hidden"
      >
        <div className="relative h-[80%] w-[80%] bg-zinc-300 overflow-hidden rounded-xl">
          <img
            ref={imgRef}
            src="https://images.unsplash.com/photo-1725714834773-b5f278346915?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
            alt=""
            className="object-cover h-full w-full"
          />
          <div
            onClick={handlerCancel}
            className="absolute top-2 right-3 text-white rounded-full px-3 py-1 cursor-pointer bg-red-600"
          >
            X
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
