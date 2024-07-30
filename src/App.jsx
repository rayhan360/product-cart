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

  return (
    <>
      <div>
        {products.map((products, index) => (
          <ProductCart key={index} product={products}></ProductCart>
        ))}
      </div>
    </>
  );
}

export default App;
