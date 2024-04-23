import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/dashboard/main");

  return (
    <>
      <h1>Hello world!</h1>
    </>
  );
}
