import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container m-auto">
      <div className="flex flex-col h-screen items-center justify-center">
        <p className="font-bold text-9xl mb-10">/</p>
        <Link href="/record">Click me</Link>
      </div>
    </div>
  );
}
