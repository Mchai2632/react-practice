export default function Container({
  children,
  backgroundColor,
}: {
  children: React.ReactNode;
  backgroundColor?: string;
}) {
  return (
    <div
      style={{
        padding: 20,
        margin: 10,
        backgroundColor: backgroundColor ? backgroundColor : "#edede9",
      }}
    >
      {children}
    </div>
  );
}
