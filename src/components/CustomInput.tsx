import React from 'react';

interface CustomInputProps {
  label: string;
  id: string;
  type?: string;
  error?: string;
  register: any;
  required?: boolean;
  pattern?: RegExp;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  id,
  type = 'text',
  error,
  register,
  required = false,
  pattern,
}) => {
  return (
    <div className="mb-4">
      <div className="flex flex-col mb-2 w-[300px] md:w-[300px] lg:w-[400px]">
        <label
          className="text-gray-500 pointer-events-none"
          htmlFor={id}
          style={{ width: '100%' }} 
        >
          {label}:
        </label>
        <input
          className={`p-2 border border-black text-black rounded-sm ${error ? 'border-red-500' : ''}`}
          {...register(id, {
            required: required && `${label} is required`,
            pattern: pattern && {
              value: pattern,
              message: `${label} is not valid`,
            },
          })}
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default CustomInput;
