import PublicTemplate from "@/components/templates/DashboardTemplate";
import UsersForm from "@/modules/users/components/UsersForm";
import CreateUserForm from "@/modules/users/components/CreateUserForm";
import DeleteUserForm from "@/modules/users/components/DeleteUserForm";
export default function Page() {
  return (
    <div>
      <PublicTemplate>
        <UsersForm />
        <CreateUserForm />
        <DeleteUserForm id={6} />
      </PublicTemplate>
    </div>
  );
}
