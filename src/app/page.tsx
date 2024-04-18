import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/dashboard/counter");

  return (
    <>
      <h1>Hello world!</h1>
    </>
  );
}
