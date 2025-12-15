"use client";

import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity?: number;
}
export function QuantitySelector({ quantity }: Props) {
  const max = quantity && quantity > 0 ? quantity : 1;
  const [currentQuantity, setCurrentQuantity] = useState(1);

  const handleAddQuantity = () => {
    if (currentQuantity < max) {
      setCurrentQuantity(currentQuantity + 1);
    }
  };

  const handleRemoveQuantity = () => {
    if (currentQuantity > 1) {
      setCurrentQuantity(currentQuantity - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 1;
    if (value < 1) value = 1;
    if (value > max) value = max;
    setCurrentQuantity(value);
  };

  const isOutOfStock = !quantity || quantity < 1;

  return (
    <div className="inline-flex gap-1 items-center rounded-md overflow-hidden">
      <button
        onClick={handleRemoveQuantity}
        disabled={currentQuantity <= 1 || isOutOfStock}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <IoRemoveCircleOutline className="size-7" />
      </button>
      <input
        type="number"
        className="w-12 text-center focus:outline-none"
        value={currentQuantity}
        min={1}
        max={max}
        disabled={isOutOfStock}
        onChange={handleInputChange}
      />
   
      <button
        onClick={handleAddQuantity}
        disabled={currentQuantity >= max || isOutOfStock}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <IoAddCircleOutline className="size-7" />
      </button>
    </div>
  );
}
