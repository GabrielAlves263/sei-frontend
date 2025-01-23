interface FormInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  hasLabel?: boolean;
  className?: string;
}

export default function FormInput({
  name,
  type,
  label,
  placeholder,
  hasLabel = true,
  className,
}: FormInputProps) {
  return (
    <div
      className={
        "w-full flex flex-col items-start justify-center my-2 mx-0 " + className
      }
    >
      {hasLabel && (
        <label htmlFor={name} className="text-background dark:text-text mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="appearance-none w-full border-none rounded-lg p-4 bg-primary text-text-contrast dark:text-text shadow-md outline-none placeholder:text-text-ligh"
      />
    </div>
  );
}
