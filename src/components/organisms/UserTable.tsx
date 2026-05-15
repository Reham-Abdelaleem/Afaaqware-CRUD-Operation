import React, { useMemo, useState } from 'react';
import { Button } from '../atoms/Button';
import { User } from '../../types/user';
import { Icon } from '../atoms/Icon';
import { Heading } from '../atoms/Heading';

interface UserTableProps {
  users: User[];
  onView: (user: User) => void;
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const ITEMS_PER_PAGE = 5;

export const UserTable: React.FC<UserTableProps> = ({
  users,
  onView,
  onEdit,
  onDelete,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  const currentUsers = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return users.slice(start, start + ITEMS_PER_PAGE);
  }, [users, currentPage]);

  const goToPage = (page: number) => setCurrentPage(page);

  const goPrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  const paginationBtnClass = (active: boolean) =>
    active
      ? 'btn-primary shadow-sm'
      : 'border border-light text-secondary hover:bg-surface-muted';

  const navBtnClass =
    'w-8 h-8 rounded border border-light flex items-center justify-center text-dimmed hover:bg-surface-muted transition-all disabled:opacity-30';

  return (
    <div className="card p-8">
      {/* Header */}
      <div className="mb-8">
        <Heading level={2} icon={<Icon name="person" className="text-info" />}>
          All Users
        </Heading>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-light mb-8 w-full">
        <table className="min-w-[600px] w-full text-left border-collapse">
          <thead>
            <tr className="table-header">
              <th className="py-4 px-6 font-bold text-main w-20">ID</th>
              <th className="py-4 px-6 font-bold text-main">Name</th>
              <th className="py-4 px-6 font-bold text-main">Email</th>
              <th className="py-4 px-6 text-right font-bold text-main w-72">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {currentUsers.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-10 text-muted"
                >
                  No users found
                </td>
              </tr>
            ) : (
              currentUsers.map((user) => (
                <tr
                  key={user.id}
                  className="table-row-hover transition-colors"
                >
                  <td className="py-4 px-6 text-dimmed font-medium">
                    {user.id}
                  </td>

                  <td className="py-4 px-6 font-semibold text-secondary">
                    {user.name}
                  </td>

                  <td className="py-4 px-6 text-muted">
                    {user.email}
                  </td>

                  <td className="py-4 px-6 text-right">
                    <div className="flex justify-end items-center gap-2">
                      <Button
                        variant="info"
                        size="sm"
                        onClick={() => onView(user)}
                      >
                        View
                      </Button>

                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => onEdit(user)}
                      >
                        Edit
                      </Button>

                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => onDelete(user.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {users.length > ITEMS_PER_PAGE && (
        <div className="flex items-center justify-center gap-2">
          <button
            type="button"
            className={navBtnClass}
            onClick={goPrev}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <Icon name="chevron_left" className="text-sm" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              type="button"
              className={`w-8 h-8 rounded flex items-center justify-center text-sm font-medium transition-all ${paginationBtnClass(
                currentPage === i + 1
              )}`}
              onClick={() => goToPage(i + 1)}
              aria-label={`Go to page ${i + 1}`}
              aria-current={currentPage === i + 1 ? 'page' : undefined}
            >
              {i + 1}
            </button>
          ))}

          <button
            type="button"
            className={navBtnClass}
            onClick={goNext}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <Icon name="chevron_right" className="text-sm" />
          </button>
        </div>
      )}
    </div>
  );
};