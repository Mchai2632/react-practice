export default function Container({
    children,
    backgroundColor,
}: {
    children: React.ReactNode;
    backgroundColor?: string;
}) {
    return (
        <div className="container" style={{ backgroundColor: backgroundColor }}>
            {children}
        </div>
    );
}
