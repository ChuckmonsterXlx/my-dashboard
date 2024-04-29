import { SimpleWidget } from "@/app/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function MainPage() {
  return (
    <div className="p-2">
      <h1>Dashboard</h1>
      <span>General information</span>

      <div className="grid grid-cols-4 gap-3 p-2">
        <SimpleWidget />
      </div>
    </div>
  );
}
