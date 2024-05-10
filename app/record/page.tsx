"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const RecordPage = async () => {
  const router = useRouter();

  const handleClick = async () => {
    const response = await fetch("/api/record", {
      method: "POST",
      body: JSON.stringify({
        name: "John Doe",
        email: "hoge1",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log("Client Component:");
    console.log(data);

    router.push("/");
    router.refresh();
  };

  return (
    <div className="conatiner m-auto">
      <div className="flex flex-col h-screen items-center justify-center">
        <p className="font-bold text-9xl mb-10">/record</p>
        <button onClick={handleClick} className="my-10 p-2 bg-red-300">
          INSERT user
        </button>
        <Link href="/">Go back</Link>
      </div>
    </div>
  );
};

export default RecordPage;
