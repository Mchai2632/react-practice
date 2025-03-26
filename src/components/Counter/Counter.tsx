import { useState } from "react";
import Container from "../Container";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <Container>
            <h1>Counter</h1>
            <hr />
            <div
                style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                }}
            >
                <button
                    disabled={count < 1}
                    onClick={() => {
                        setCount((prev) => prev - 1);
                    }}
                >
                    -
                </button>
                <span>{count}</span>
                <button
                    onClick={() => {
                        setCount((prev) => prev + 1);
                    }}
                >
                    +
                </button>
            </div>
        </Container>
    );
}
