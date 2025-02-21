interface FormSubmitProps {
  label: string;
}

export default function FormSubmit({ label }: FormSubmitProps) {
  return (
    <button
      type="submit"
      className="w-full py-4 m-6 border-none rounded-lg outline-none uppercase font-extrabold text-login-card bg-success cursor-pointer shadow-md transition-transform tracking-widest hover:scale-110 "
    >
      {label}
    </button>
  );
}
