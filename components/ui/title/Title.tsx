interface Props {
    title: string;
    subtitle?: string;
    className?: string;
}

export function Title({ title, subtitle, className }: Props) {
  return (
    <div className={className}>
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      {subtitle && <h2 className="text-sm text-gray-600">{subtitle}</h2>}
    </div>
  );
}