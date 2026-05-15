import React from 'react';
import { Icon } from '../atoms/Icon';
import { SidebarItem } from '../molecules/SidebarItem';
import { Heading } from '../atoms/Heading';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen = false,
  onClose,
}) => {
  const sidebarClasses = [
    'fixed inset-y-0 left-0 z-50 w-64 sm:w-72 sidebar flex flex-col justify-between h-screen',
    'transition-transform duration-300',
    isOpen ? 'translate-x-0' : '-translate-x-full',
    'lg:translate-x-0 lg:static lg:block',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={sidebarClasses} role="navigation">
        <div>
          {/* Header */}
          <div className="h-20 flex items-center justify-between px-8 mb-6">
            <Heading
              level={3}
              icon={<Icon name="group" className="text-2xl" />}
              className="text-primary tracking-tight"
            >
              User Management
            </Heading>

            <button
              type="button"
              aria-label="Close sidebar"
              className="lg:hidden text-muted hover:text-main"
              onClick={onClose}
            >
              <Icon name="close" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2 px-4">
            <SidebarItem icon="people" label="Users" active />
            <SidebarItem icon="person_add" label="Add User" />
            <SidebarItem icon="settings" label="Settings" />
          </nav>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-light">
          <button
            type="button"
            className="text-muted hover:text-main flex items-center gap-3 px-3 py-2 text-sm font-semibold transition-all duration-200 w-full text-left"
          >
            <Icon name="logout" variant="outlined" className="text-[20px]" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};