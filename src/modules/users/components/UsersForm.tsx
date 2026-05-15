"use client";
import useGetUsers from "../hooks/useUsers";

export default function UsersForm() {
  const { data, isPending } = useGetUsers();
  if (isPending) return "loading";
  if (!data || data.length === 0) return "no user";

  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>
          <h2>{user.id}</h2>
          <p>
            {user.name} - {user.email}
          </p>
        </div>
      ))}
    </div>
  );
}
