import React from 'react';
import { Icon } from '../atoms/Icon';
import { Button } from '../atoms/Button';

interface StatCardProps {
  title: string;
  description: string;
  icon: string;
  iconColor: 'blue' | 'green' | 'orange' | 'red';
  buttonText: string;
  variant: 'info' | 'success' | 'warning' | 'danger';
  onClick?: () => void;
}

const iconStyles: Record<StatCardProps['iconColor'], string> = {
  blue: 'bg-info-light text-info',
  green: 'bg-success-light text-success',
  orange: 'bg-warning-light text-warning',
  red: 'bg-danger-light text-danger',
};

export const StatCard: React.FC<StatCardProps> = ({
  title,
  description,
  icon,
  iconColor,
  buttonText,
  variant,
  onClick,
}) => {
  return (
    <div className="card p-5 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className={[
            'w-12 h-12 rounded-lg flex items-center justify-center shrink-0',
            iconStyles[iconColor],
          ].join(' ')}
        >
          <Icon name={icon} />
        </div>

        <div>
          <h3 className="font-semibold text-main text-[15px]">
            {title}
          </h3>
          <p className="text-muted text-xs mt-1">
            {description}
          </p>
        </div>
      </div>

      {/* Action */}
      <Button variant={variant} fullWidth onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  );
};