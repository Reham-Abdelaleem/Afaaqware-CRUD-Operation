"use client";
import useGetUser from "../users/hooks/useGetUser";
interface Props {
  id: number;
}
export default function GetUserForm({ id }: Props) {
  const { data, isPending } = useGetUser(id);
  if (isPending) return "loading";
  if (!data) return "no user";
  return (
    <div>
      <h4>{data?.id}</h4>
      <p>
        {data?.name} - {data?.email}
      </p>
    </div>
  );
}
