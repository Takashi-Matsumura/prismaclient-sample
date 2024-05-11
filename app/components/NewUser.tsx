import { useRouter } from "next/navigation";
import { useState } from "react";

const NewUser = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = async () => {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ name, email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    router.push("/");
    router.refresh();
  };

  return (
    <div className="flex flex-col space-y-5 w-1/2 p-10 items-center">
      <form className="border-2 w-2/3 p-5">
        <p className="text-center font-bold">Form (NewUser.tsx)</p>
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="mb-2">
            Name
          </label>
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
            name="name"
            id="name"
            className="border-2 p-2"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
            name="email"
            id="email"
            className="border-2 p-2"
          />
        </div>
        <button
          type="button"
          onClick={handleClick}
          className="bg-blue-500 text-white p-2"
        >
          Submit
        </button>
      </form>

      <div className="border-2 w-full items-center justify-center p-5 overflow-auto whitespace-normal">
        {JSON.stringify({ name, email })}
      </div>
    </div>
  );
};

export default NewUser;
