"use client";
import { useDeleteUser } from "../hooks/useDeleteUser";
import Button from "@/components/atoms/Button";
interface Props {
  id: number;
}

export default function DeleteUserForm({ id }: Props) {
  const { mutate, isPending } = useDeleteUser();

  const handleDelete = () => {
    mutate(id, {
      onSuccess: () => {
        alert("تم حذف المستخدم ");
      },
      onError: () => {
        alert("حدث خطا اثناء الحذف ");
      },
    });
  };
  return (
    <div>
      <Button onClick={handleDelete} size="md">
        {isPending ? "loading" : "Delete User"}
      </Button>
    </div>
  );
}
