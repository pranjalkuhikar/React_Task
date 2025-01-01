import { useContext } from "react";
import { ProductContext } from "../context/ProductDataContext";

const Product = () => {
  const { products, HandlerCart, added } = useContext(ProductContext);
  return (
    <>
      <div className="bg-zinc-800 min-h-screen w-full px-10 py-4 text-white">
        <div className="text-center text-3xl mb-5"> All Products</div>
        <div className="h-full w-full rounded-md p-10 border border-zinc-200  gap-10 flex items-center justify-start flex-wrap">
          {products.length > 0 ? (
            products.map((item, idx) => (
              <div
                key={idx}
                className="border border-zinc-200 rounded-lg h-[32em] w-80 p-5"
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
                <div
                  onClick={() => !added[item.id] && HandlerCart(item.id)}
                  className={`${
                    added[item.id]
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-zinc-600"
                  } w-full bg-green-600 font-semibold mt-2 mb-2 text-center rounded-lg py-2 cursor-pointer active:scale-95`}
                >
                  {added[item.id] ? "Added" : "Add to Cart"}
                </div>
              </div>
            ))
          ) : (
            <div>Loading.....</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
