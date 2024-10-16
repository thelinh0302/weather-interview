import React, { FC } from "react";

interface InputProps {
  name: string;
  id: string;
  type: string;
  placeholder?: string;
  label?: string;
  error?: string;
}

export const InputField: FC<InputProps> = ({
  name,
  id,
  label,
  type,
  error,
  ...rest
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[14px] font-normal leading-6 text-[#2D3748]"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          {...rest}
          className={`block w-full h-[50px] rounded-[15px] border-0 py-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4FD1C5] sm:text-sm sm:leading-6 bg-transparent px-2 ${
            error ? "ring-red-500" : "ring-[#4FD1C5]"
          }`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    </div>
  );
};
