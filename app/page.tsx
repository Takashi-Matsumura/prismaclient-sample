import Link from "next/link";
import ViewUsers from "./components/ViewUsers";

export default function Home() {
  return (
    <div className="container m-auto">
      <div className="flex h-screen items-center justify-between">
        <div className="flex flex-col w-1/2 items-center justify-center">
          <p className="font-bold text-9xl mb-10">/</p>
          <Link href="/user">[new user]</Link>
        </div>
        <ViewUsers />
      </div>
    </div>
  );
}
