import React, { useState } from 'react';
import { Sidebar } from '../organisms/Sidebar';
import { StatCard } from '../molecules/StatCard';
import { SearchInput } from '../molecules/SearchInput';
import { Heading } from '../atoms/Heading';
import { Icon } from '../atoms/Icon';

interface StatItem {
  title: string;
  description: string;
  icon: string;
  iconColor: 'blue' | 'green' | 'orange' | 'red';
  buttonText: string;
  variant: 'info' | 'success' | 'warning' | 'danger';
  onClick?: () => void;
}

interface DashboardTemplateProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  onSearch: (query: string) => void;
  stats: StatItem[];
}

export const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
  children,
  title,
  subtitle,
  onSearch,
  stats = [],
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      {/* Main */}
      <main className="flex-1 overflow-y-auto" data-purpose="main-content">
        <div className="max-w-[1500px] mx-auto p-4 sm:p-6 lg:p-12">
          {/* Header */}
          <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8 lg:mb-12">
            {/* Title Section */}
            <div className="flex items-center justify-between w-full md:w-auto">
              <div>
                <Heading
                  level={1}
                  className="mb-1 md:mb-2 tracking-tight text-2xl md:text-3xl"
                >
                  {title}
                </Heading>

                <p className="text-dimmed text-xs md:text-sm font-medium">
                  {subtitle}
                </p>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                aria-label="Open menu"
                className="lg:hidden p-2 rounded-lg bg-surface border border-light text-muted hover:text-main transition-colors"
                onClick={openSidebar}
              >
                <Icon name="menu" />
              </button>
            </div>

            {/* Search */}
            <SearchInput
              className="w-full sm:w-80 lg:w-96"
              placeholder="Search users..."
              onChange={(e) => onSearch(e.target.value)}
            />
          </header>

          {/* Stats */}
          {stats.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => (
                <StatCard
                  key={stat.title}
                  {...stat}
                />
              ))}
            </div>
          )}

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};