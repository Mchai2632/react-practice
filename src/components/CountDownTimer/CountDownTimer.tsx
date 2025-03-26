import { useEffect, useState } from "react";
import Container from "../Container";

export default function CountDownTimer() {
    const [countDown, setCountDown] = useState<number>(0);
    const [isStart, setIsStart] = useState(false);

    useEffect(() => {
        if (isStart && countDown > 0) {
            const interval = setInterval(() => {
                setCountDown((prev) => prev - 1);
                console.log(countDown);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isStart, countDown]);

    return (
        <Container>
            <h1>CountDownTimer</h1>
            <hr />
            <input
                type="number"
                onChange={(e) => {
                    setCountDown(Number(e.target.value));
                    setIsStart(false);
                }}
            />
            <span>{countDown === 0 && isStart ? "時間到!" : countDown}</span>
            <button
                onClick={() => setIsStart(true)}
                disabled={countDown === 0 && isStart}
            >
                開始
            </button>
        </Container>
    );
}
