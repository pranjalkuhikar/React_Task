import { useState } from "react";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      description: "High-quality wireless headphones with noise cancellation",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      category: "Electronics",
      inStock: true,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      description: "Fitness tracking smartwatch with heart rate monitor",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      category: "Electronics",
      inStock: true,
      rating: 4.3,
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 79.99,
      description: "Comfortable running shoes with breathable mesh",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      category: "Sports",
      inStock: true,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Coffee Maker",
      price: 49.99,
      description: "Programmable coffee maker with thermal carafe",
      image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6",
      category: "Home",
      inStock: false,
      rating: 4.2,
    },
    {
      id: 5,
      name: "Backpack",
      price: 39.99,
      description: "Water-resistant backpack with laptop compartment",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      category: "Accessories",
      inStock: true,
      rating: 4.4,
    },
  ];
  const [filtered, setFiltered] = useState(products);
  const handlerChange = (e) => {
    setFiltered(
      filtered.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  return (
    <div className="bg-zinc-900 min-h-screen w-full p-10 text-white">
      <div className="w-full flex items-center justify-center gap-6 mb-10">
        <input
          type="text"
          placeholder="Search the Product"
          onChange={handlerChange}
          className="bg-transparent border border-slate-100 p-4 rounded-md text-white"
        />
      </div>
      <div className="h-full w-full rounded-md p-10 border border-zinc-200  gap-10 flex items-center justify-start flex-wrap">
        {filtered.length > 0 ? (
          filtered.map((item, idx) => (
            <div
              key={idx}
              className="border border-zinc-200 rounded-lg h-[25em] w-80 p-5"
            >
              <div className="h-[60%] w-full">
                <img
                  src={item.image}
                  alt=""
                  className="rounded-t-xl h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <div className="text-lg">{item.name}</div>
                <div className="text-sm opacity-55">{item.description}</div>
                <div className="flex items-center justify-between">
                  <div className="text-md"> Price : {item.price}</div>
                  <div className="px-3 py-1 rounded-lg text-white text-sm bg-green-600 ">
                    {item.inStock ? "InStock" : "OutOFStock"}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Category : {item.category}</div>
                  <div className="px-3 py-1 rounded-lg text-white text-sm bg-yellow-600 ">
                    Rating : {item.rating}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No Data.....</div>
        )}
      </div>
    </div>
  );
};

export default App;
