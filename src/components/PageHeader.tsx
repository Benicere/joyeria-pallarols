type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
};

export default function PageHeader({ eyebrow, title, lede }: Props) {
  return (
    <header className="page-header">
      <div className="page-header-inner">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </header>
  );
}
