import Link from "next/link";
import React from "react";

const RecordPage = () => {
  return (
    <div className="conatiner m-auto">
      <div className="flex flex-col h-screen items-center justify-center">
        <p>RecordPage</p>
        <Link href="/">Go back</Link>
      </div>
    </div>
  );
};

export default RecordPage;
