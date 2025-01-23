interface FormSelectProps {
  label: string;
  name: string;
  hasLabel?: boolean;
  className?: string;
}

export default function FormSelect({
  name,
  label,
  hasLabel = true,
  className,
}: FormSelectProps) {
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
      <select
        id={name}
        name={name}
        className=" w-full border-none rounded-lg p-4 bg-primary text-text-contrast dark:text-text shadow-md outline-none"
      >
        <option selected disabled hidden className="text-text-light">
          Selecione seu curso
        </option>
        <option value="EC">Engenharia de Computação</option>
        <option value="EE">Engenharia Elétrica</option>
        <option value="OC">Outro</option>
      </select>
    </div>
  );
}
