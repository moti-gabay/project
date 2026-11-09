import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/login");
  // return (
  //   <div>
  //     <h1>Home page</h1>
  //   </div>
  // )
}
