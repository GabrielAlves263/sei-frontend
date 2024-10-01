interface IContainerProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}

export default function Container({
  title,
  children,
  className,
  tag: Tag = "section",
}: IContainerProps) {
  return (
    <Tag className={`flex flex-col w-full bg-paper rounded-xl pb-16`}>
      <h1 className="flex mx-10 py-3 font-bold h-16 items-center">{title}</h1>
      <div className={`${className}`}>{children}</div>
    </Tag>
  );
}
