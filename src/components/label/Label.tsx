import Link from "next/link";

interface LabelProps {
  text: string;
  path: string;
  isAP?: boolean;
}

export default function Label({ text, path, isAP = false }: LabelProps) {
  return isAP ? (
    <Link href={path} legacyBehavior>
      <a
        className="w-full h-full flex items-center justify-center"
        target="_blank"
      >
        <div className="w-64 h-10 flex items-center px-3 py-2 justify-center bg-primary-dark text-text-contrast font-semibold rounded-lg hover:bg-primary hover:underline hover:text-paper cursor-pointer">
          {text}
        </div>
      </a>
    </Link>
  ) : (
    <Link className="w-fit rounded-lg" href={path}>
      <div className="w-64 h-10 flex items-center px-3 py-2 justify-center bg-primary-dark text-text-contrast font-semibold rounded-lg hover:bg-primary hover:underline hover:text-paper cursor-pointer">
        {text}
      </div>
    </Link>
  );
}
