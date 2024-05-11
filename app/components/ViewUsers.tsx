"use client";

import { UserType } from "@/app/api/user/type";
import { useEffect, useState } from "react";

async function getUsers(): Promise<UserType[]> {
  const res = await fetch("/api/user");
  const data = await res.json();
  return data;
}

const ViewUsers = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const users = await getUsers();
      setUsers(users);
      setIsLoading(false);
    };
    fetchUsers();
  }, [reload]);

  const handleReload = () => {
    setReload(!reload);
  };

  return (
    <div className="w-1/2">
      <div className="flex justify-between mb-5">
        <p className="text-center font-bold text-3xl">Supabase: User table</p>
        {isLoading ? (
          <p>Reloading...</p>
        ) : (
          <button
            onClick={handleReload}
            type="button"
            className="bg-blue-500 text-white px-2 py-1"
          >
            Reload
          </button>
        )}
      </div>
      {users.map((user) => (
        <div className="flex border-2 w-full px-2 py-1">
          {JSON.stringify(user)}
        </div>
      ))}
    </div>
  );
};

export default ViewUsers;
