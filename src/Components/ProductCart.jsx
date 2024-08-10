import { memo } from "react";

/* eslint-disable react/prop-types */
const ProductCart = ({ product, addToCart }) => {
  console.log(`${product.productName} rendered`)
  const { productName, price, img } = product;
  return (
    <div className="border rounded-lg shadow-lg p-4 flex flex-col items-center">
      <img
        src={img}
        alt={productName}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">{productName}</h2>
      <p className="text-gray-600 mb-4">${price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default memo(ProductCart);