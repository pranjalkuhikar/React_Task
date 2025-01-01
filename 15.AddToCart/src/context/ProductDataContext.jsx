/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductDataContext = ({ children }) => {
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
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [added, setAdded] = useState({});
  const [price, setPrice] = useState(0);

  const updatePrice = (currentPrice, productPrice, isAdding) => {
    return parseFloat(
      (currentPrice + (isAdding ? productPrice : -productPrice)).toFixed(2)
    );
  };

  const HandlerCart = (productId) => {
    const clickedProduct = products.find((product) => product.id === productId);
    if (clickedProduct) {
      setCart((prevCart) => [...prevCart, clickedProduct]);
      setCount((prevCount) => prevCount + 1);
      setAdded((prevAdded) => ({ ...prevAdded, [productId]: true }));
      setPrice((prevPrice) =>
        updatePrice(prevPrice, clickedProduct.price, true)
      );
    }
  };

  const HandlerDelete = (productId) => {
    const productToDelete = cart.find((product) => product.id === productId);
    if (productToDelete) {
      setCart((prevCart) =>
        prevCart.filter((product) => product.id !== productId)
      );
      setCount((prevCount) => prevCount - 1);
      setAdded((prevAdded) => {
        const newAdded = { ...prevAdded };
        newAdded[productId] = false;
        return newAdded;
      });
      setPrice((prevPrice) =>
        updatePrice(prevPrice, productToDelete.price, false)
      );
    }
  };

  return (
    <>
      <ProductContext.Provider
        value={{
          products,
          HandlerCart,
          cart,
          HandlerDelete,
          count,
          added,
          price,
        }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
};

export default ProductDataContext;
