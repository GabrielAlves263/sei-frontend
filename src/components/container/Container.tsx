interface IContainerProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  titleColor?: string;
}

export default function Container({
  title,
  children,
  className,
  tag: Tag = "div",
  titleColor = "text",
}: IContainerProps) {
  return (
    <section className={`flex flex-col w-full bg-paper rounded-xl pb-16`}>
      {title && (
        <h1
          className={`flex mx-10 py-3 font-bold text-lg h-16 items-center text-${titleColor}`}
        >
          {title}
        </h1>
      )}
      <Tag className={`${className}`}>{children}</Tag>
    </section>
  );
}
