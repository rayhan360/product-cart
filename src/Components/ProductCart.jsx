/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const ProductCart = ({ products, addToCart }) => {
  const { productName, price, img } = products;
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
        onClick={() => addToCart(products)}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCart;
