import Link from "next/link";

interface LabelProps {
  text: string;
  path: string;
}

export default function Label({ text, path }: LabelProps) {
  return (
    <div className="w-64 h-10 flex items-center px-3 py-2 justify-center bg-primary-dark text-text-contrast font-semibold rounded-lg hover:bg-primary hover:underline cursor-pointer">
      <Link href={path}>{text}</Link>
    </div>
  );
}
