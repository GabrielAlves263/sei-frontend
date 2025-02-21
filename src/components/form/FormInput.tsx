"use client"
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  hasLabel?: boolean;
  className?: string;
  register: UseFormRegister<any>;
}

export default function FormInput({
  name,
  type,
  label,
  placeholder,
  hasLabel = true,
  className,
  register,
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const getType = (type: string) => {
    if (type === "password") {
      return showPassword ? "text" : "password";
    }
    return type;
  };

  return (
    <div
      className={
        "w-full flex flex-col items-start justify-between my-2 mx-0 " +
        className
      }
    >
      {hasLabel && (
        <label htmlFor={name} className="text-background dark:text-text mb-2">
          {label}
        </label>
      )}
      <div className="flex w-full justify-between items-center">
        <input
          type={getType(type)}
          placeholder={placeholder}
          {...register(name)}
          className="appearance-none w-full border-none rounded-lg p-4 bg-primary text-text-contrast dark:text-text shadow-md outline-none placeholder:text-text-ligh"
        />
        {type === "password" && (
          <div className="transition-all" onClick={toggleShowPassword}>
            {showPassword ? (
              <BiSolidHide className="size-6 ml-[-5vh] relative right-4 cursor-pointer text-text-light hover:text-text" />
            ) : (
              <BiSolidShow className="size-6 ml-[-5vh] relative right-4 cursor-pointer text-text-light hover:text-text" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
