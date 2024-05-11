import Image from "next/image";
import Link from "next/link";
import { UserType } from "./api/user/type";

async function getUsers(): Promise<UserType[]> {
  const res = await fetch("http://localhost:3000/api/record");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const users = await getUsers();

  return (
    <div className="container m-auto">
      <div className="flex h-screen items-center justify-between">
        <div className="flex flex-col w-1/2 items-center justify-center">
          <p className="font-bold text-9xl mb-10">/</p>
          <Link href="/user">[new user]</Link>
        </div>
        <div className="w-1/2">
          <p className="text-center font-bold text-3xl">Supabase: User table</p>
          {users.map((user) => (
            <div className="flex border-2 w-full px-2">
              {JSON.stringify(user)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
