"use client";

import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="grid grid-cols-4 gap-3 p-2">
      <SimpleWidget
        title={count.toString()}
        subTitle="Products in shopping cart"
        label="Counter"
        icon={<IoCartOutline size={50} className="text-blue-500" />}
        href="/dashboard/counter"
      />
    </div>
  );
};
