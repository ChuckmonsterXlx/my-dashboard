import { CartCounter } from "@/app/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Simple counter",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1>Counter Page</h1>
      <span>Products in the shopping cart</span>

      <CartCounter value={7} />
    </div>
  );
}
