import React, { useEffect, useState } from 'react';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { User } from '../../types/user';
import { Heading } from '../atoms/Heading';

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface UserFormProps {
  title: string;
  initialData?: Partial<User>;
  buttonText: string;
  onSubmit: (data: FormData) => void;
  variant?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';
  horizontal?: boolean;
}

export const UserForm: React.FC<UserFormProps> = ({
  title,
  initialData,
  buttonText,
  onSubmit,
  variant = 'primary',
  horizontal = false,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  });

  const isEditMode = Boolean(initialData?.id);

  useEffect(() => {
    setFormData({
      name: initialData?.name ?? '',
      email: initialData?.email ?? '',
      password: '',
    });
  }, [initialData]);

  const handleChange = (key: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = isEditMode
      ? { name: formData.name, email: formData.email }
      : formData;

    onSubmit(payload as FormData);
  };

  const formClasses = [
    'card p-6 md:p-8 h-full',
  ].join(' ');

  const layoutClasses = horizontal
    ? 'flex flex-col md:flex-row md:items-end gap-6'
    : 'space-y-6';

  return (
    <div className={formClasses}>
      {/* Header */}
      <div className="mb-8">
        <Heading
          level={2}
          icon={
            <Icon
              name={isEditMode ? 'edit' : 'person_add'}
              className="text-primary"
              variant={isEditMode ? 'outlined' : 'filled'}
            />
          }
          className="text-primary text-xl"
        >
          {title}
        </Heading>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className={layoutClasses}>
        {/* Name */}
        <div className="flex-1 min-w-[200px]">
          <Input
            label="Name"
            placeholder="Enter name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="flex-1 min-w-[200px]">
          <Input
            label="Email"
            placeholder="Enter email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>

        {/* Password (create only) */}
        {!isEditMode && (
          <div className="flex-1 min-w-[200px]">
            <Input
              label="Password"
              placeholder="Enter password"
              type="password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
            />
          </div>
        )}

        {/* Submit */}
        <div
          className={
            horizontal
              ? 'flex items-end md:h-[70px] w-full md:w-auto'
              : 'pt-2'
          }
        >
          <Button
            type="submit"
            variant={variant}
            fullWidth={!horizontal}
            className="shadow-sm"
          >
            {buttonText}
          </Button>
        </div>
      </form>
    </div>
  );
};