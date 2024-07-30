import { useState } from "react";
import "./App.css";
import ProductCart from "./Components/ProductCart";

function App() {
  const products = [
    {
      productName: "Classic Cheeseburger",
      price: 8.99,
      img: "https://www.foodandwine.com/thmb/LUEdbNTLcdq_BtCmINp23zQbQro=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheeseburgers-eat-delicious-XL-BLOG0517-b578f43651854aeb8e2e605580094811.jpg",
    },
    {
      productName: "Veggie Pizza",
      price: 12.99,
      img: "https://www.orchidsandsweettea.com/wp-content/uploads/2019/05/Veggie-Pizza-2-of-5-e1691215701129.jpg",
    },
    {
      productName: "Grilled Chicken Salad",
      price: 10.49,
      img: "https://ifoodreal.com/wp-content/uploads/2021/06/fg-grilled-chicken-salad.jpg",
    },
    {
      productName: "Spaghetti Carbonara",
      price: 13.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3xmBLnEEZiONfdpuyDNCZadCZbi3qmGZSAQ&s",
    },
    {
      productName: "Margarita Cocktail",
      price: 7.5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHy2IGZeWqhHKPqi3UwV_JMdbYGUji8i9BQ&s",
    },
    {
      productName: "Chocolate Brownie",
      price: 5.25,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJH8yDc61fRQqhiitmIBb-0k_BVXuwygCFA&s",
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find(
        (item) => item.productName === product.productName
      );
      if (productInCart) {
        return prevCart.map((item) =>
          item.productName === product.productName
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, count: 1 }];
      }
    });
  };

  const totalCount = cart.reduce((acc, item) => acc + item.count, 0);

  return (
    <>
      {/* cart */}
      <div className="mt-8 p-4 border-b border-gray-300 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Added cart</h2>
        <h2 className="font-bold">Total Cart Added: {totalCount}</h2>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="flex justify-between mb-2">
              {item.productName} x {item.count}
            </div>
          ))
        ) : (
          <div>No cart added yet</div>
        )}
      </div>
      <div className="container mx-auto p-4">
        {/* product */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((products, index) => (
            <ProductCart
              key={index}
              products={products}
              addToCart={addToCart}
            ></ProductCart>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
