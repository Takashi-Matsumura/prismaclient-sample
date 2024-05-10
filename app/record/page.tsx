"use client";

import Link from "next/link";
import React from "react";

const RecordPage = async () => {
  const handleClick = async () => {
    const response = await fetch("/api/record", {
      method: "POST",
      body: JSON.stringify({
        name: "John Doe",
        email: "hoge",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="conatiner m-auto">
      <div className="flex flex-col h-screen items-center justify-center">
        <p>RecordPage</p>
        <button onClick={handleClick} className="my-10 p-2 bg-black text-white">
          INSERT user
        </button>
        <Link href="/">Go back</Link>
      </div>
    </div>
  );
};

export default RecordPage;
