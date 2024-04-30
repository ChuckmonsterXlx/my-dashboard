import { SimpleWidget, WidgetsGrid } from "@/components";
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

      <WidgetsGrid />
    </div>
  );
}
