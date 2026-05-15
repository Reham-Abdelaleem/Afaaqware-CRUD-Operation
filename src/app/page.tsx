'use client';

import React, { useState } from 'react';
import { DashboardTemplate } from '../components/templates/DashboardTemplate';
import { UserTable } from '../components/organisms/UserTable';
import { UserForm } from '../components/organisms/UserForm';
import { Heading } from '../components/atoms/Heading';
import { Icon } from '../components/atoms/Icon';

import { User } from '../types/user';
import {
  useUsers,
  useCreateUser,
  useUpdateUser,
  useDeleteUser,
} from '../hooks/useUsers';

export default function UserManagementPage() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  /*== Data ==*/
  const { data: users = [] } = useUsers();
  const { mutateAsync: createUser } = useCreateUser();
  const { mutateAsync: updateUser } = useUpdateUser();
  const { mutateAsync: deleteUser } = useDeleteUser();

  /*== Handlers ==*/
  const onCreateUser = async (data: any) => {
    try {
      await createUser(data);
    } catch {
      alert('Failed to create user');
    }
  };

  const onUpdateUser = async (data: any) => {
    if (!selectedUser) return;

    try {
      await updateUser({
        id: selectedUser.id,
        ...data,
      });

      setSelectedUser(null);
    } catch {
      alert('Failed to update user');
    }
  };

  const onDeleteUser = async (id: number) => {
    const confirmed = confirm('Delete this user?');
    if (!confirmed) return;

    try {
      await deleteUser(id);

      if (selectedUser?.id === id) {
        setSelectedUser(null);
      }
    } catch {
      alert('Failed to delete user');
    }
  };

  /*== Stats ==*/
  const stats = [
    {
      title: 'Users',
      description: 'Browse all users',
      icon: 'groups',
      iconColor: 'blue' as const,
      buttonText: 'View Users',
      variant: 'info' as const,
    },
    {
      title: 'User Details',
      description: 'View single user',
      icon: 'person_outline',
      iconColor: 'green' as const,
      buttonText: 'Open User',
      variant: 'success' as const,
    },
    {
      title: 'Create',
      description: 'Add new user',
      icon: 'person_add_alt',
      iconColor: 'orange' as const,
      buttonText: 'Create',
      variant: 'warning' as const,
    },
    {
      title: 'Delete',
      description: 'Remove user',
      icon: 'delete_outline',
      iconColor: 'red' as const,
      buttonText: 'Delete',
      variant: 'danger' as const,
    },
  ];

  /*== UI ==*/
  return (
    <DashboardTemplate
      title="User Management"
      subtitle="Manage system users easily"
      stats={stats}
      onSearch={(q) => console.log(q)}
    >
      {/* LEFT SIDE */}
      <section className="flex-1 flex flex-col gap-10">
        <UserTable
          users={users}
          onView={setSelectedUser}
          onEdit={setSelectedUser}
          onDelete={onDeleteUser}
        />

        <UserForm
          title="Create New User"
          buttonText="Create User"
          variant="primary"
          horizontal
          onSubmit={onCreateUser}
        />
      </section>

      {/* RIGHT SIDE */}
      <aside className="w-full lg:w-[400px] flex flex-col gap-10 shrink-0">
        {/* DETAILS CARD */}
        <div className="card p-8">
          <Heading
            level={2}
            icon={<Icon name="person" className="text-info" />}
          >
            User Details
          </Heading>

          {!selectedUser ? (
            <div className="py-12 text-center text-dimmed italic border-2 border-dashed border-light rounded-xl mt-6">
              Select a user to view details
            </div>
          ) : (
            <div className="mt-8 space-y-6">
              <DetailRow label="ID" value={`#${selectedUser.id}`} />
              <DetailRow label="Name" value={selectedUser.name} />
              <DetailRow label="Email" value={selectedUser.email} />
            </div>
          )}
        </div>

        {/* UPDATE FORM */}
        <UserForm
          title="Update User"
          buttonText="Update"
          variant="secondary"
          initialData={selectedUser || {}}
          onSubmit={onUpdateUser}
        />
      </aside>
    </DashboardTemplate>
  );
}

/*== Small UI Component ==*/
function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-light pb-4">
      <span className="text-xs font-bold text-dimmed uppercase tracking-wider">
        {label}
      </span>
      <span className="text-[15px] font-semibold text-secondary">
        {value}
      </span>
    </div>
  );
}