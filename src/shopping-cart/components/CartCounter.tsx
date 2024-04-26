"use client";

import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [count, setCount] = useState(value);

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex gap-1">
        <button
          onClick={() => {
            if (count < 1) {
              return;
            }

            setCount(count - 1);
          }}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] "
        >
          -1
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
        >
          +1
        </button>
      </div>
    </>
  );
};
