import { memo } from "react";

const CartDisplay = ({ cart }) => (
    
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
);

export default memo(CartDisplay);
