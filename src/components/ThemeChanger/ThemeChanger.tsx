import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import Container from "../Container";

export default function ThemeChanger() {
    const { setTheme, theme } = useTheme();
    const [selectedID, setSelectedID] = useState(theme);

    const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
        const id = e.currentTarget.id as "light" | "dark";
        setSelectedID(id);
        setTheme(id); // 順便合併 setTheme
    };

    const options = [
        { id: "light", label: "Light", bg: "#fefefe", color: "black" },
        { id: "dark", label: "Dark", bg: "black", color: "white" },
    ] as const;

    return (
        <Container>
            <h1>ThemeChanger</h1>
            <hr />
            <div style={{ display: "flex", gap: "1rem" }}>
                {options.map((option) => (
                    <div
                        key={option.id}
                        id={option.id}
                        className="box"
                        style={{
                            backgroundColor: option.bg,
                            color: option.color,
                            border:
                                selectedID === option.id
                                    ? "2px solid blue"
                                    : "1px solid gray",
                            padding: "1rem",
                        }}
                        onClick={handleSelect}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        </Container>
    );
}
