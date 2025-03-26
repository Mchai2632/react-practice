import { ReactNode } from "react";

interface ContainerProps extends React.ComponentProps<"div"> {
    children: ReactNode;
}

export default function Container({
    children,
    className = "",
    ...props
}: ContainerProps) {
    return (
        <div className={`container ${className}`} {...props}>
            {children}
        </div>
    );
}
