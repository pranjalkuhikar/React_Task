import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductDataContext";

const Navbar = () => {
  const { count } = useContext(ProductContext);
  return (
    <>
      <div className="flex bg-zinc-800 text-white items-center justify-between px-10 py-4 border-b-2 border-white">
        <Link
          to={"/"}
          className="font-sans tracking-tighter text-4xl cursor-pointer"
        >
          Pranjal Shop
        </Link>
        <Link
          to={"/cart"}
          className="flex items-center justify-center flex-col text-xl"
        >
          {count}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shopping-cart"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
