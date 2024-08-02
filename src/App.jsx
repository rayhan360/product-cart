import { useState } from "react";
import "./App.css";
import ProductCart from "./Components/ProductCart";

function App() {
  const products = [
    {
      id: 1,
      productName: "Classic Cheeseburger",
      price: 8.99,
      img: "https://www.foodandwine.com/thmb/LUEdbNTLcdq_BtCmINp23zQbQro=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheeseburgers-eat-delicious-XL-BLOG0517-b578f43651854aeb8e2e605580094811.jpg",
    },
    {
      id: 2,
      productName: "Veggie Pizza",
      price: 12.99,
      img: "https://www.orchidsandsweettea.com/wp-content/uploads/2019/05/Veggie-Pizza-2-of-5-e1691215701129.jpg",
    },
    {
      id: 3,
      productName: "Grilled Chicken Salad",
      price: 10.49,
      img: "https://ifoodreal.com/wp-content/uploads/2021/06/fg-grilled-chicken-salad.jpg",
    },
    {
      id: 4,
      productName: "Spaghetti Carbonara",
      price: 13.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3xmBLnEEZiONfdpuyDNCZadCZbi3qmGZSAQ&s",
    },
    {
      id: 5,
      productName: "Margarita Cocktail",
      price: 7.5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHy2IGZeWqhHKPqi3UwV_JMdbYGUji8i9BQ&s",
    },
    {
      id: 6,
      productName: "Chocolate Brownie",
      price: 5.25,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJH8yDc61fRQqhiitmIBb-0k_BVXuwygCFA&s",
    },
  ];

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find((item) => item.id === product.id);
      if (productInCart) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, count: 1 }];
      }
    });
  };

  const totalCount = cart.reduce((acc, item) => acc + item.count, 0);

  return (
    <>
      <div className="mt-8 p-4 border-b border-gray-300 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Added cart</h2>
        <button
          onClick={() => setShowCart(!showCart)}
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
        >
          Cart ({totalCount})
        </button>
        {showCart && (
          <div className="mt-4">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={item.id} className="flex justify-between mb-2">
                  {item.productName} x {item.count}
                </div>
              ))
            ) : (
              <div>No cart added yet</div>
            )}
          </div>
        )}
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCart
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
